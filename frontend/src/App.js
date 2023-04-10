import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Home from './components/main/Home';
import Navbar from './components/main/Navbar';
import SignUp from './components/main/SignUp';
import SignIn from './components/main/SignIn';
import ForgetPswd from './components/main/ForgetPswd';
import Organisation_Pro from './components/main/Organisation_Pro';
import Competition_det_entry from './components/main/Competition_det_entry';
import Online_Comp from './components/main/Online_Comp';
import Offline_Comp from './components/main/Offline_Comp';
import Feedback from './components/main/Feedback';
import { UserAuthContextProvider } from './context/UserAuthContext'
import PhoneSignUp from './components/main/PhoneSignUp'
import ProtectedRoute from './components/main/ProtectedRoute'
// import PhoneSignUp from './components/main/PhoneSignUp';
// import ProtectedRoute from './components/main/ProtectedRoute';
// import { UserAuthContextProvider } from './context/UserAuthContext';




function App() {
  return (
    <BrowserRouter>
      <UserAuthContextProvider>
        <Navbar />
        <Routes>
          <Route element={<Navigate to='/homepage' />} path='/' />
          {/* <Route element={<ProtectedRoute><Home /></ProtectedRoute>} path='/homepage' /> */}
          <Route element={<SignUp />} path='signup' />
          <Route element={<Home />} path='homepage' />
          <Route element={<SignIn />} path='signin' />
          <Route element={<ForgetPswd />} path='forgetpswd' />
          <Route element={<Organisation_Pro />} path='organisationPro' />
          <Route element={<Competition_det_entry />} path='Competition_det_entry' />
          <Route element={<Online_Comp />} path='onlineComp' />
          <Route element={<Offline_Comp />} path='offlineComp' />
          <Route element={<Feedback />} path='feedback' />
          {/* <Route element={<PhoneSignUp />} path='/phonesignup' /> */}

          {/* <Route element={<PhoneSignUp />} path='phonesignup' /> */}
        </Routes>
      </UserAuthContextProvider>
     
    </BrowserRouter >
  );
}

export default App;
