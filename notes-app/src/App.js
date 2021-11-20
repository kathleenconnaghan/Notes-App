import NotesList from './components/NotesList';
import { useState } from 'react';
import {nanoid } from 'nanoid';
import Search from './components/Search';
import Header from './components/Header';

const App = () => {
  const [notes, setNotes] = useState([
    {
    id: nanoid(),
    text: "Thanksgiving dinner 7pm",
    date: "11/5/2021"
  },
  {
    id: nanoid(),
    text: "Buy Christmas tree soon",
    date: "11/12/2021"
  },
  {
    id: nanoid(),
    text: "Electrician coming Tuesday",
    date: "11/14/2021"
  },
  {
    id: nanoid(),
    text: "Get car wash",
    date: "11/17/2021"
  },
]);

//------------- Search

const [ searchText, setSearchText ] = useState('');

//------------- DarkMode
const [ darkMode, setDarkMode ] = useState(false);

//------------- Add Note

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

//-------------- Delete Note

const deleteNote = (id) => {
  const newNotes = notes.filter((note) => note.id !== id)
  setNotes(newNotes);
}

  return(
    <div className= {`${darkMode && 'darkMode'}`}>
      <div className = 'container'>
        <Header 
         handleToggleDarkMode= {setDarkMode} 
        />

        <Search
         handleSearchNote= {setSearchText} 
        />

        <NotesList 
          notes={notes.filter((note) => 
              note.text.toLowerCase().includes(searchText)
          )} 
          handleAddNote= {addNote}
          handleDeleteNote= {deleteNote}
        />
      </div>
    </div>
  );
};

export default App;