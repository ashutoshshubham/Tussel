import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Home from './components/main/Home';
import Navbar from './components/main/Navbar';
import SignUp from './components/main/SignUp';
import SignIn from './components/main/SignIn';
import ForgetPswd from './components/main/ForgetPswd';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route element={<Navigate to='/homepage' />} path='/'/>
          <Route element={<Home />} path='homepage'/>
          <Route element={<SignUp />} path='signup'/>
          <Route element={<SignIn />} path='signin'/>
          <Route element={<ForgetPswd />} path='forgetpswd'/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
