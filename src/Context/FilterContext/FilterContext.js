import { createContext, useContext, useState } from "react";
import { useMainContext } from "../MainContext/MainContext";
const FilterContext = createContext({});

const FilterContextProvider = ({ children }) => {
  const { userInfo } = useMainContext();
  const { notes } = userInfo;
  const [tags, setTags] = useState([
    "All tags",
    "Personal",
    "Work",
    "Class",
    "Team",
    "Project",
  ]);
  const [filterByObj, setFilterByObj] = useState({
    tag: "All tags",
    priority: "All priority",
    sortBy: "Sort By",
  });
  const [serachInput, setSearchInput] = useState("");

  const sortByLatest = (filterByObj, notes) => {
    let showNotesList = notes;
    return (showNotesList =
      filterByObj.sortBy === "Sort By"
        ? showNotesList
        : filterByObj.sortBy === "Oldest"
        ? (showNotesList.sort(
            (first, second) =>
              new Date(first.date).getTime() - new Date(second.date).getTime()
          ),
          showNotesList.sort(
            (first, second) => first.time.seconds - second.time.seconds
          ),
          showNotesList.sort(
            (first, second) => first.time.minutes - second.time.minutes
          ),
          showNotesList.sort(
            (first, second) => first.time.hours - second.time.hours
          ))
        : (showNotesList.sort(
            (first, second) =>
              new Date(first.date).getTime() - new Date(second.date).getTime()
          ),
          showNotesList.sort(
            (first, second) => second.time.seconds - first.time.seconds
          ),
          showNotesList.sort(
            (first, second) => second.time.minutes - first.time.minutes
          ),
          showNotesList.sort(
            (first, second) => second.time.hours - first.time.hours
          )));
  };

  const filterNotes = (filterByObj, notes) => {
    let showNotesList = notes;
    if (showNotesList && showNotesList.length > 0) {
      showNotesList =
        filterByObj.tag === "All tags"
          ? showNotesList
          : showNotesList.filter(
              (note) =>
                note.tag.toLowerCase() === filterByObj.tag.toLowerCase() ||
                note.label.toLowerCase() === filterByObj.tag.toLowerCase()
            );
      showNotesList =
        filterByObj.priority === "All priority"
          ? showNotesList
          : showNotesList.filter(
              (note) =>
                note.priority.toLowerCase() ===
                filterByObj.priority.toLowerCase()
            );
      showNotesList = sortByLatest(filterByObj, showNotesList);
    }

    return showNotesList;
  };

  const showNotesList = filterNotes(filterByObj, notes);

  return (
    <FilterContext.Provider
      value={{
        filterByObj,
        setFilterByObj,
        tags,
        setTags,
        showNotesList,
        setSearchInput,
        serachInput,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

const useFilter = () => useContext(FilterContext);

export { useFilter, FilterContextProvider };
