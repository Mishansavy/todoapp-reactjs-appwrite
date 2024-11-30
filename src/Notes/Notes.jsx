import React, { useEffect, useState } from "react";
import { databases } from "../appwrite/config";
import db from "../appwrite/databases";
import { Query } from "appwrite";

//componets
import NoteForm from "../components/NoteForm";
import { Note } from "../components/Note";
export const Notes = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    //listDocuments used to make request with database
    // const response = await databases.listDocuments(
    //   import.meta.env.VITE_DATABASE_ID,
    //   import.meta.env.VITE_COLLECTION_ID_NOTE
    // );
    // using db to organize things better
    const response = await db.notes.list([Query.orderDesc("$createdAt")]);

    setNotes(response.documents);
  };

  return (
    <div>
      <div className="formCompone">
        <NoteForm setNotes={setNotes} />
      </div>
      <div>
        {notes.map((note) => (
          <Note key={note.$id} setNotes={setNotes} noteData={note} />
          //   <div key={notes.$id}>
          //     <h1>{notes.body}</h1>
          //   </div>
        ))}
      </div>
    </div>
  );
};
