// src/App.jsx
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import MailboxDetails from './components/MailboxDetails';
import MailboxForm from './components/MailboxForm';
import MailboxList from './components/MailboxList';


const App = () => {
  const [mailboxes, setMailboxes] = useState([]);

  const addBox = (newBox) => {
    const newMailbox = {
      _id: mailboxes.length + 1,
      boxSize: newBox.boxSize,
      boxholder: newBox.boxholder,
    }
    setMailboxes([...mailboxes, newMailbox])
  };

  return (
    
    <div className='App'>
      <NavBar />
      <Routes>
        <Route path='/' element={<main><h1>Post Office</h1></main>} />
        <Route path='/mailboxes' element={<MailboxList mailboxes={mailboxes} />} />
        <Route path='/new-mailbox' element={<MailboxForm onCreateMailbox={addBox} />} />
        <Route path='/mailboxes/:mailboxId' element={<MailboxDetails mailboxes={mailboxes} />} />
      </Routes>
    </div>
  )

};

export default App;

