import React from "react";
import db from "../appwrite/databases";
const NoteForm = ({ setNotes }) => {
  const handleAdd = async (e) => {
    e.preventDefault();
    const notesbody = e.target.body.value;

    // prevent from adding empty values
    if (notesbody === "") return;

    try {
      const payload = { body: notesbody };
      const response = await db.notes.create(payload);
      //take previous data and update with new one
      setNotes((preState) => [response, ...preState]);

      //reset the form after updating the value
      e.target.reset();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="formdiv">
      <form onSubmit={handleAdd}>
        <input
          type="text"
          name="body"
          placeholder="🤔 What work you have today"
        />
      </form>
    </div>
  );
};

export default NoteForm;
