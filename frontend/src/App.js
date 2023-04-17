// import './App.css';
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
import UserProvider from './context/UserProvider';
import UserAuth from './auth/UserAuth'
import All_Details from './components/main/All_Details';
import { useState } from 'react';







function App() {

  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')));

  return (
    <BrowserRouter>
      <UserProvider currentUser={currentUser}>
        <Navbar />
        <Routes>
          <Route element={<Navigate to='/homepage' />} path='/' />
          <Route element={<SignUp />} path='signup' />
          <Route element={<Home />} path='homepage' />
          <Route element={<SignIn />} path='signin' />
          <Route element={<ForgetPswd />} path='forgetpswd' />

          <Route element={<UserAuth><Organisation_Pro /></UserAuth>} path='organisationPro' />
          <Route element={<UserAuth><Competition_det_entry /></UserAuth>} path='Competition_det_entry' />
          <Route element={<UserAuth><Online_Comp /></UserAuth>} path='onlineComp' />
          <Route element={<UserAuth><Offline_Comp /></UserAuth>} path='offlineComp' />
          <Route element={<UserAuth><Feedback /></UserAuth>} path='feedback' />
          {/* <Route element={<UserAuth><All_Details /></UserAuth>} path='all_details/:userId' /> */}
          <Route element={<All_Details />} path='all_details/:userId' />

        </Routes>
      </UserProvider>

    </BrowserRouter >
  );
}

export default App;
