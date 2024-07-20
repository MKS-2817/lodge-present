import React, { useEffect, useState } from 'react';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';

//------------------------------------------components-------------------------------------------
import Home from './screens/home/Home';
import Login from './screens/login/Login';
import { readUserToken, saveUserToken } from './utils/appFunction';

//------------------------------------------components-------------------------------------------
const realToken = '';
// s6z8PiKcH7iVX3YyUbcVbjjlct0h8DrRDGFpZdLCov8Ij7rHbrGfU1bjUxPWmbRX

const App = () => {
  const navigate = useNavigate();

  // State-----------------------------------------------------------------------
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // Function--------------------------------------------------------------------
  const checkLogin = () => {
    setLoading(true);
    const token = readUserToken();

    console.log(token);

    if (!token) {
      navigate('/login');
    } else {
      if (token === realToken) {
        navigate('/home');
      } else {
        navigate('/login');
        setError(true);
      }
    }
    setLoading(false);
  }

  // Hooks--------------------------------------------------------------------
  useEffect(() => {
    saveUserToken();
    checkLogin();
  }, []);

  // App--------------------------------------------------------------------
  return (
    <Routes>
      <Route path="/" element={<Navigate to='/login' />} />
      <Route path="/login" element={<Login loading={loading} />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default App;
