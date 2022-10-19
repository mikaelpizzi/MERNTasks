import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './components/auth/Login';
import NewAccount from './components/auth/NewAccount';
import Projects from './components/projects/Projects';
import ProjectState from './context/projects/ProjectState';
import TaskState from './context/tasks/TaskState';

function App() {
  return (
    <ProjectState>
      <TaskState>
        <Router>
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/new-account" element={<NewAccount />} />
            <Route exact path="/projects" element={<Projects />} />
          </Routes>
        </Router>
      </TaskState>
    </ProjectState>
  );
}

export default App;
