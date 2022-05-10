import './css/App.css';
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import StartPage from './components/StartPage';
import LoggedIn from './components/LoggedIn';
import PopupPage from './components/PopupPage';

function App() {
  const [username, setUsername] = useState('');

  const handleInput = () => {
    console.log(username)
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<StartPage linkStyle={linkStyle} />} />
          <Route path='/popup' element={<PopupPage username={username} setUsername={setUsername} linkStyle={linkStyle} handleInput={handleInput} />} />
          <Route path='/loggedin' element={<LoggedIn username={username} linkStyle={linkStyle} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

const linkStyle = {
  marginRight: "1rem",
  textDecoration: "none",
  color: '#393939'
}

export default App;
