import React, { useMemo, useState } from 'react';
import {
  Route,
  Routes,
  // useNavigate 
} from 'react-router-dom';

//------------------------------------------components-------------------------------------------
import Home from './screens/home/Home';
// import Login from './screens/login/Login';
// import { readUserToken } from './utils/appFunction';
import PresentForm from './screens/present_form/PresentForm';
import SecondPrPage from './screens/present_form/components/SecondPrPage';
import ConfirmPrPage from './screens/present_form/components/ConfirmPrPage';
import { AppContext } from './contexts/AppContext';

//------------------------------------------components-------------------------------------------
const realToken = 's6z8PiKcH7iVX3YyUbcVbjjlct0h8DrRDGFpZdLCov8Ij7rHbrGfU1bjUxPWmbRX';
// s6z8PiKcH7iVX3YyUbcVbjjlct0h8DrRDGFpZdLCov8Ij7rHbrGfU1bjUxPWmbRX

const App = () => {
  // const navigate = useNavigate();

  // // State-----------------------------------------------------------------------
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(false);
  const [saveFiled, setSaveFiled] = useState([]);

  // Function--------------------------------------------------------------------
  // const checkLogin = () => {
  //   setLoading(true);
  //   const token = readUserToken();

  //   console.log(token);

  //   if (!token) {
  //     navigate('/login');
  //   } else {
  //     if (token === realToken) {
  //       navigate('/home');
  //     } else {
  //       navigate('/login');
  //       setError(true);
  //     }
  //   }
  //   setLoading(false);
  // }

  // Hooks--------------------------------------------------------------------
  // useEffect(() => {
  //   // saveUserToken();
  //   checkLogin();
  // }, []);

  const appContextValues = useMemo(() => {
    return {
      saveFiled,
      setSaveFiled
    }
  }, [saveFiled]);


  // App--------------------------------------------------------------------
  return (
    <AppContext.Provider value={appContextValues}>
      <Routes>
        {/* <Route path="/" element={<Navigate to='/login' />} />
        <Route path="/login" element={<Login loading={loading} />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/createfrom" element={<PresentForm />} />
        <Route path="/secondPrPage" element={<SecondPrPage />} />
        <Route path="/confirmPrPage" element={<ConfirmPrPage />} />
      </Routes>
    </AppContext.Provider>
  );
}

export default App;

