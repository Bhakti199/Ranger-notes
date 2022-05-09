import React, { useState } from "react";
import "../../Pages/NoteTakingPage/NoteTakingPage.css";
import { IoIosColorPalette } from "react-icons/io";
import { ColorPalette } from "../../Components";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { modules, formats } from "../Constants";
import { useMainContext } from "../../Context";
export const NoteEditor = () => {
  const {
    noteInput,
    setNoteInput,
    addNote,
    CancelNoteHandler,
    updateNoteState,
    EditNote,
  } = useMainContext();
  const [showColorPalette, setShowColorPalette] = useState(false);

  return (
    <div
      className="react-quill-cotainer"
      style={{
        backgroundColor: noteInput.color,
      }}
    >
      <input
        placeholder="Add title"
        className="title-input"
        value={noteInput.title}
        onChange={(event) =>
          setNoteInput((prevNote) => ({
            ...prevNote,
            title: event.target.value,
          }))
        }
      />
      <ReactQuill
        theme="snow"
        modules={modules}
        formats={formats}
        className="editor-of-note"
        placeholder="Add a note..."
        value={noteInput.content}
        onChange={(event) =>
          setNoteInput((prevNote) => ({ ...prevNote, content: event }))
        }
      />
      <div className="note-taking-footer">
        <div className="note-taking-footer-partone">
          <select
            className="select-section"
            value={noteInput.tag}
            onChange={(event) =>
              setNoteInput((prevNote) => ({
                ...prevNote,
                tag: event.target.value,
              }))
            }
          >
            <option>Personal</option>
            <option>Office</option>
            <option>Team</option>
            <option>Project</option>
          </select>

          <select
            className="select-section"
            value={noteInput.priority}
            onChange={(event) =>
              setNoteInput((prevNote) => ({
                ...prevNote,
                priority: event.target.value,
              }))
            }
          >
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>

          <div className="input-container">
            <input
              className="label-input"
              placeholder="Add Tag"
              value={noteInput.label}
              onChange={(event) =>
                setNoteInput((prevNote) => ({
                  ...prevNote,
                  label: event.target.value,
                }))
              }
            />
          </div>

          <div className="color-palette-container">
            <IoIosColorPalette
              size={30}
              color="var(--grey-color)"
              onClick={() => setShowColorPalette((prevValue) => !prevValue)}
            />
            {showColorPalette && (
              <ColorPalette
                className="color-palette-display"
                setShowColorPalette={setShowColorPalette}
              />
            )}
          </div>
        </div>
        <div className="note-taking-footer-parttwo">
          {updateNoteState ? (
            <button
              className="add-note-button"
              onClick={() => {
                EditNote(noteInput._id, noteInput);
                setNoteInput({
                  title: "",
                  content: "",
                  tag: "personal",
                  priority: "low",
                  label: "none",
                  color: "white",
                  date: "",
                });
              }}
            >
              Update
            </button>
          ) : (
            <button
              className="add-note-button"
              onClick={() => {
                setNoteInput((prevNote) => ({
                  ...prevNote,
                  date: new Date().toLocaleDateString(),
                }));
                addNote(noteInput);
                setNoteInput({
                  title: "",
                  content: "",
                  tag: "personal",
                  priority: "low",
                  label: "none",
                  color: "white",
                  date: "",
                });
              }}
            >
              Add
            </button>
          )}

          <button className="cancel-note-button" onClick={CancelNoteHandler}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
