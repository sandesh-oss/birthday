import React from 'react';
//import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {HashRouter, Routes, Route} from "react-router-dom";
import BirthdayGreeting from './components/BirthdayGreeting';
import Surprise from './components/Surprise';
import Message from './components/Message';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<BirthdayGreeting />} />
        <Route path="/surprise" element={<Surprise />} />
        <Route path="/message" element={<Message />} />
      </Routes>
    </HashRouter>
  );
}

export default App;