import React, { useState } from "react";

function CreateNote(props) {
  const [newNote, updateNote] = useState({
    title: "",
    note: "",
  });
  function handelChange(event) {
    const { name, value } = event.target;
    updateNote((preNote) => {
      return {
        ...preNote,
        [name]: value,
      };
    });
  }
  function SubmitForm(event) {
    updateNote(() => {
      return {
        title: "",
        note: "",
      };
    });
    event.preventDefault();
    props.AddNote(newNote);
  }
  return (
    <div>
      <form className="flex">
        <input
          type="text"
          placeholder="Add Title"
          onChange={handelChange}
          name="title"
          value={newNote.title}
          autoComplete="off"
        />
        <textarea
          name="note"
          id=""
          cols="30"
          rows="10"
          placeholder="Add Note"
          onChange={handelChange}
          value={newNote.note}
        ></textarea>
       <button type="submit" disabled={!newNote.title} className="btn" onClick={SubmitForm}>
          +
        </button>
      </form>
    </div>
  );
}

export default CreateNote;
