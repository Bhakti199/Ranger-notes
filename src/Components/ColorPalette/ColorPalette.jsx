import React from "react";
import "./ColorPalette.css";
import { useMainContext } from "../../Context";
export const ColorPalette = ({ setShowColorPalette }) => {
  const { noteInput, setNoteInput } = useMainContext();
  let colors = [
    "#bef264",
    "#fca5a5",
    "#7dd3fc",
    "#a3a3a3",
    "#fb7185",
    "#c084fc",
    "rgb(255, 191, 129)",
    "#86efac",
  ];
  return (
    <div className="color-palette">
      {colors.map((color, index) => (
        <div
          className="color"
          key={index}
          style={{ backgroundColor: color }}
          value={noteInput.color}
          onClick={() => {
            setShowColorPalette(false);
            setNoteInput((prevNote) => ({ ...prevNote, color: color }));
          }}
        ></div>
      ))}
    </div>
  );
};
