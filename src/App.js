import { Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import ProjectsPage from './components/ProjectsPage';
import RecruitingPage from './components/RecruitingPage';
import RegistrationPage from './components/RegistrationPage';
import StartupsPage from './components/StartupsPage';
import './scss/app.scss'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<HomePage/>} />
        <Route path="login" element={<LoginPage/>} />
        <Route path="registration" element={<RegistrationPage/>}/>
        <Route path="projects" element={<ProjectsPage/>} />
        <Route path="startups" element={<StartupsPage/>} />
        <Route path="recruiting" element={<RecruitingPage/>} />
      </Routes>
    </div>
  );
}

export default App;
