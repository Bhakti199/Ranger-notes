import { createContext, useContext, useState } from "react";
import { toast } from "react-hot-toast";
import {
  addNoteCall,
  addNoteToArchieveCall,
  addNoteToTrashCall,
  EditNoteCall,
  RestoreNoteFromArchiveCall,
  RestoreNoteFromTrashCall,
  DeleteNoteFromNotesCall,
  DeleteNoteFromArchivesCall,
  DeleteNoteFromTrashCall,
} from "../../ApiCalls";
const MainContext = createContext();

const MainContextProvider = ({ children }) => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const [updateNoteState, setUpdateNoteState] = useState(false);
  const [pinnedNotes, setPinnedNotes] = useState([]);
  const [tags, setTags] = useState([
    "Personal",
    "Work",
    "Class",
    "Team",
    "Project",
  ]);
  const [noteInput, setNoteInput] = useState({
    title: "",
    content: "",
    tag: "personal",
    priority: "low",
    label: "",
    color: "white",
    date: "",
    time: {
      hours: 0,
      minutes: 0,
      seconds: 0,
    },
  });

  const addNote = async (note) => {
    const { notes, status } = await addNoteCall(note);
    if (status === 200 || status === 201) {
      setUserInfo((prevUser) => ({ ...prevUser, notes }));
    }
  };

  const addNoteToArchives = async (noteId, note) => {
    const { notes, archives, status } = await addNoteToArchieveCall(
      noteId,
      note
    );
    if (status === 200 || status === 201) {
      setUserInfo((prevUser) => ({ ...prevUser, notes, archives }));
      toast("Note moved to archives successfully.");
    }
  };

  const restoreNoteFromArchives = async (noteId) => {
    const { notes, archives, status } = await RestoreNoteFromArchiveCall(
      noteId
    );
    if (status === 200 || status === 201) {
      setUserInfo((prevUser) => ({ ...prevUser, notes, archives }));
      toast("Note restored successfully.");
    }
  };

  const addNoteToTrash = async (noteId) => {
    const { notes, trash, status } = await addNoteToTrashCall(noteId);
    if (status === 200 || status === 201) {
      setUserInfo((prevUser) => ({ ...prevUser, notes, trash }));
      toast("Note moved to trash successfully.");
    }
  };

  const EditNote = async (noteId, note) => {
    const { notes, status } = await EditNoteCall(noteId, note);
    if (status === 200 || status === 201) {
      setUserInfo((prevUser) => ({ ...prevUser, notes }));
      toast("Note updated successfully");
    }
  };

  const RestoreNoteFromTrash = async (noteId) => {
    const { notes, trash, status } = await RestoreNoteFromTrashCall(noteId);
    if (status === 200 || status === 201) {
      setUserInfo((prevUser) => ({ ...prevUser, notes, trash }));
      toast("Note restored successfully.");
    }
  };

  const DeleteNoteFromNotes = async (noteId) => {
    const { notes, status } = await DeleteNoteFromNotesCall(noteId);
    if (status === 200 || status === 201) {
      setUserInfo((prevUser) => ({ ...prevUser, notes }));
      toast("Note pinned successfully");
    }
  };

  const DeleteNoteFromArchives = async (noteId) => {
    const { archives, status } = await DeleteNoteFromArchivesCall(noteId);
    if (status === 200 || status === 201) {
      setUserInfo((prevUser) => ({ ...prevUser, archives }));
      toast("Note deleted successfully");
    }
  };

  const DeleteNoteFromTrash = async (noteId) => {
    const { trash, status } = await DeleteNoteFromTrashCall(noteId);
    if (status === 200 || status === 201) {
      setUserInfo((prevUser) => ({ ...prevUser, trash }));
      toast("Note deleted successfully");
    }
  };
  const CancelNoteHandler = () => {
    setNoteInput({
      title: "",
      content: "",
      tag: "personal",
      priority: "low",
      label: "",
      color: "white",
      date: "",
    });
  };
  const removePinnedNote = (note) => {
    let tempPinnedNotes = pinnedNotes.filter(
      (pinnedNote) => pinnedNote._id != note._id
    );
    setPinnedNotes([...tempPinnedNotes]);
    addNote(note);
  };
  return (
    <MainContext.Provider
      value={{
        openSidebar,
        setOpenSidebar,
        isUserLoggedIn,
        setIsUserLoggedIn,
        userInfo,
        setUserInfo,
        noteInput,
        setNoteInput,
        addNote,
        CancelNoteHandler,
        updateNoteState,
        setUpdateNoteState,
        addNoteToArchives,
        restoreNoteFromArchives,
        addNoteToTrash,
        EditNote,
        tags,
        setTags,
        RestoreNoteFromTrash,
        DeleteNoteFromNotes,
        DeleteNoteFromArchives,
        DeleteNoteFromTrash,
        pinnedNotes,
        setPinnedNotes,
        removePinnedNote,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

const useMainContext = () => useContext(MainContext);

export { MainContextProvider, useMainContext };
