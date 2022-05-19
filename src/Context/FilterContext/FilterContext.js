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
  });
  const [serachInput, setSearchInput] = useState("");
  const filterNotes = (filterByObj, notes) => {
    let showNotesList = notes;
    console.log("show", showNotesList);
    if (showNotesList && showNotesList.length > 0) {
      console.log("in if", showNotesList);
      showNotesList =
        filterByObj.tag === "All tags"
          ? showNotesList
          : showNotesList.filter(
              (note) => note.tag.toLowerCase() === filterByObj.tag.toLowerCase()
            );
      showNotesList =
        filterByObj.priority === "All priority"
          ? showNotesList
          : showNotesList.filter(
              (note) =>
                note.priority.toLowerCase() ===
                filterByObj.priority.toLowerCase()
            );
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
