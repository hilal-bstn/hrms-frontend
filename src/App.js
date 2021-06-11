import './App.css';
import Dashboard from "./layouts/Dashboard";
import 'semantic-ui-css/semantic.min.css'
import Navi from './layouts/Navi';
import { Container } from "semantic-ui-react";
import EmployerList from './pages/EmployerList';
import JobSeekerList from './pages/JobSeekerList';
import EmployerJobPostingAddForm from './pages/EmployerJobPostingAddForm';
import EmployerJobPostingList from './pages/EmployerJobPostingList';
import EmployerJobPostingDetail from './pages/EmployerJobPostingDetail';
import JobSeekerContactAddForm from './pages/JobSeekerContactAddForm';
import JobSeekerCoverLetterAddForm from './pages/JobSeekerCoverLetterAddForm';


function App() {
  return (
    <div className="App">
      <Navi/>
      <Container className="main">
<JobSeekerCoverLetterAddForm></JobSeekerCoverLetterAddForm>
      </Container>
    </div>
  );
}

export default App;
