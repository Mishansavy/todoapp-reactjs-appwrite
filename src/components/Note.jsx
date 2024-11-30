import React, { useState } from "react";
import db from "../appwrite/databases";

import DeleteIcon from "../assets/DeleteIcon";

export const Note = ({ setNotes, noteData }) => {
  const [note, setNote] = useState(noteData);

  const handleupdate = async () => {
    const completed = !note.completed;
    db.notes.update(note.$id, { completed });
    setNote({ ...note, completed: completed });
  };

  const handleDelete = async () => {
    db.notes.delete(note.$id);
    setNotes((preState) => preState.filter((i) => i.$id !== note.$id));
  };

  return (
    <div className="note-wrapper">
      <span onClick={handleupdate} className="note-body">
        {note.completed ? <s>{note.body}</s> : <>{note.body}</>}
      </span>

      <div onClick={handleDelete}>
        <DeleteIcon />
      </div>
    </div>
  );
};
