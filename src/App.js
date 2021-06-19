import "./App.css";
import Dashboard from "./layouts/Dashboard";
import "semantic-ui-css/semantic.min.css";
import Navi from "./layouts/Navi";
import { Container } from "semantic-ui-react";
import JobSeekerContactAddForm from "./pages/JobSeekerContactAddForm";
import JobSeekerCoverLetterAddForm from "./pages/JobSeekerCoverLetterAddForm";
import EmployerJobPostingAddForm from "./pages/EmployerJobPostingAddForm";

function App() {
  return (
    <div className="App">
      <Navi />
      <Container className="main">
          <Dashboard></Dashboard>
      </Container>
    </div>
  );
}

export default App;
