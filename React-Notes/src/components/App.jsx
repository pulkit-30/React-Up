import React, { useState } from "react";
import Header from "./Header";
import CreateNote from "./CreateNote";
import MainBody from "./MainBody";
import Footer from "./Footer";
function App() {
  const [Notes, setNotes] = useState([]);

  function addNote(note) {
    setNotes((prevalue) => {
      return [...prevalue, note];
    });
  }
  function deleteNote(id) {
    console.log(id);
    setNotes((prevalue) => {
      return prevalue.filter((note, index) => {
        return index !== id;
      });
    });
  }
  function displayNote(note, index) {
    return (
      <MainBody
        title={note.title}
        note={note.note}
        del={deleteNote}
        key={index}
        id={index}
      />
    );
  }
  return (
    <div className="App">
      <Header />
      <CreateNote AddNote={addNote} />
      <div className="container flex">{Notes.map(displayNote)}</div>
      <Footer />
    </div>
  );
}

export default App;
