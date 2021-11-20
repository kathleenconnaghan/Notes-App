import NotesList from './components/NotesList';
import { useState } from 'react';
import {nanoid } from 'nanoid';
import Search from './components/Search';

const App = () => {
  const [notes, setNotes] = useState([
    {
    id: nanoid(),
    text: "This is my first note!",
    date: "11/5/2021"
  },
  {
    id: nanoid(),
    text: "This is my second note.",
    date: "11/12/2021"
  },
  {
    id: nanoid(),
    text: "This is my third note.",
    date: "11/19/2021"
  },
  {
    id: nanoid(),
    text: "This is my new note.",
    date: "11/15/2021"
  },
]);

const addNote = (text) => {
  const date = new Date();
  const newNote =  {
    id: nanoid(),
    text: text,
    date: date.toLocaleDateString(),
  }
  const newNotes = [...notes, newNote];
  setNotes(newNotes);
}

const deleteNote = (id) => {
  const newNotes = notes.filter((note) => note.id !== id)
  setNotes(newNotes);
}

  return(
    <div className = 'container'>
      <Search/>
      <NotesList 
        notes={notes} 
        handleAddNote={addNote}
        handleDeleteNote= {deleteNote}
      />
    </div>
  )
}

export default App;