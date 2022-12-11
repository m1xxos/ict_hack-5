import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import ProjectsPage from './components/ProjectsPage';
import RecruitingPage from './components/RecruitingPage';
import RegistrationPage from './components/RegistrationPage';
import StartupsPage from './components/StartupsPage';
import StudentsPage from './components/StudentsPage';

import LoginPopup from "./components/LoginPopup";
import './scss/app.scss'

function App() {
  const [popupHidden, setPopupHidden] = useState(true)
  return (
    <div className="App">
      <LoginPopup hidden={popupHidden} setPopupHidden={setPopupHidden}/>
      <Routes>
        <Route path="*" element={<HomePage popupHidden={popupHidden} setPopupHidden={setPopupHidden}/>} />
        <Route path="login" element={<LoginPage/>} />
        <Route path="registration" element={<RegistrationPage/>}/>
        <Route path="projects" element={<ProjectsPage/>} />
        <Route path="startups" element={<StartupsPage/>} />
        <Route path="students" element={<StudentsPage popupHidden={popupHidden} setPopupHidden={setPopupHidden}/>} />
        <Route path="recruiting" element={<RecruitingPage/>} />
      </Routes>
    </div>
  );
}

export default App;
