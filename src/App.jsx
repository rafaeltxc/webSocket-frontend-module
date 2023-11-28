import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';

import SignUpForm from './screens/SignUpForm';
import SignInForm from './screens/SignInForm';
import Chat from './screens/Chat';

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem('user', { name: 'sadfa' });
    if (!localStorage.getItem('user')) {
      navigate('/sign-up');
    }
  }, []);

  return (
    <div className="root">
      <Routes>
        <Route path="/" element={<Chat />} />
        <Route path="/sign-up" element={<SignUpForm />} />
        <Route path="/sign-in" element={<SignInForm />} />
      </Routes>
    </div>
  );
}

export default App;
