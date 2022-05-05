import React from "react";
import "../../Pages/NoteTakingPage/NoteTakingPage.css";
import { BsPlusCircle } from "react-icons/bs";
import { IoIosColorPalette } from "react-icons/io";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { modules, formats } from "../Constants";

export const NoteEditor = () => {
  return (
    <div className="react-quill-cotainer">
      <input placeholder="Add title" className="title-input" />
      <ReactQuill
        theme="snow"
        modules={modules}
        formats={formats}
        className="editor-of-note"
        placeholder="Add a note..."
      />
      <div className="note-taking-footer">
        <div className="note-taking-footer-partone">
          <select className="select-section">
            <option>Personal</option>
            <option>Office</option>
            <option>Team</option>
            <option>Project</option>
          </select>
          <select className="select-section">
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
          <div className="input-container">
            <input className="label-input" placeholder="add label" />
            <BsPlusCircle size={25} color="var(--grey-color)" />
          </div>
          <IoIosColorPalette size={30} color="var(--grey-color)" />
        </div>
        <div className="note-taking-footer-parttwo">
          <button className="add-note-button">Add</button>
          <button className="cancel-note-button">Cancel</button>
        </div>
      </div>
    </div>
  );
};
