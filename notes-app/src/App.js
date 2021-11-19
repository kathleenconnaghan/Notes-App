import NotesList from './components/NotesList';
import { useState } from 'react';
import {nanoid } from 'nanoid';

const App = () => {
  const [notes, setNotes] = useState([
    {
    id: nanoid(),
    text: "This is my first note!",
    date: "Nov/5/2021"
  },
  {
    id: nanoid(),
    text: "This is my second note.",
    date: "Nov/12/2021"
  },
  {
    id: nanoid(),
    text: "This is my third note.",
    date: "Nov/19/2021"
  },
  {
    id: nanoid(),
    text: "This is my new note.",
    date: "Nov/15/2021"
  },
]);
  return(
    <div className = 'container'>
      <NotesList notes={notes}/>
    </div>
  )
}

export default App;