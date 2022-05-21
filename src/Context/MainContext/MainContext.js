import { createContext, useContext, useState } from "react";
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
    }
  };

  const restoreNoteFromArchives = async (noteId) => {
    const { notes, archives, status } = await RestoreNoteFromArchiveCall(
      noteId
    );
    if (status === 200 || status === 201) {
      setUserInfo((prevUser) => ({ ...prevUser, notes, archives }));
    }
  };

  const addNoteToTrash = async (noteId) => {
    const { notes, trash, status } = await addNoteToTrashCall(noteId);
    if (status === 200 || status === 201) {
      setUserInfo((prevUser) => ({ ...prevUser, notes, trash }));
    }
  };

  const EditNote = async (noteId, note) => {
    const { notes, status } = await EditNoteCall(noteId, note);
    if (status === 200 || status === 201) {
      setUserInfo((prevUser) => ({ ...prevUser, notes }));
    }
  };

  const RestoreNoteFromTrash = async (noteId) => {
    const { notes, trash, status } = await RestoreNoteFromTrashCall(noteId);
    if (status === 200 || status === 201) {
      setUserInfo((prevUser) => ({ ...prevUser, notes, trash }));
    }
  };

  const DeleteNoteFromNotes = async (noteId) => {
    const { notes, status } = await DeleteNoteFromNotesCall(noteId);
    if (status === 200 || status === 201) {
      setUserInfo((prevUser) => ({ ...prevUser, notes }));
    }
  };

  const DeleteNoteFromArchives = async (noteId) => {
    const { archives, status } = await DeleteNoteFromArchivesCall(noteId);
    if (status === 200 || status === 201) {
      setUserInfo((prevUser) => ({ ...prevUser, archives }));
    }
  };

  const DeleteNoteFromTrash = async (noteId) => {
    const { trash, status } = await DeleteNoteFromTrashCall(noteId);
    if (status === 200 || status === 201) {
      setUserInfo((prevUser) => ({ ...prevUser, trash }));
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
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

const useMainContext = () => useContext(MainContext);

export { MainContextProvider, useMainContext };
