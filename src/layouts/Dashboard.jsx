import React from "react";
import { Route } from "react-router";
import { Grid } from "semantic-ui-react";
import EmployerJobPostingAddForm from "../pages/EmployerJobPostingAddForm";
import EmployerJobPostingDetail from "../pages/EmployerJobPostingDetail";
import EmployerJobPostingList from "../pages/EmployerJobPostingList";
import EmployerList from "../pages/EmployerList";
import HrmsConfirmationJobPostingList from "../pages/hrmsConfirmationJobPostingList";
import JobSeekerContactAddForm from "../pages/JobSeekerContactAddForm";
import JobSeekerCoverLetterAddForm from "../pages/JobSeekerCoverLetterAddForm";
import JobSeekerExperiencesAddForm from "../pages/JobSeekerExperiencesAddForm";
import JobSeekerLanguageAddForm from "../pages/JobSeekerLanguageAddForm";
import JobSeekerList from "../pages/JobSeekerList";
import JobSeekerCV from "./JobSeekerCV";
import Main from "./Main";


export default function Dashboard() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={16}>
            <Route exact path="/" component={Main} />
            <Route path="/employers" component={EmployerList} />
            <Route path="/jobseekers" component={JobSeekerList} />
            <Route path="/jobpostings" component={EmployerJobPostingList} />
            <Route path="/jobposting/:id" component={EmployerJobPostingDetail} />
            <Route path="/jobseekercv/:id" component={JobSeekerCV} />
            <Route path="/employerjobpostingaddform" component={EmployerJobPostingAddForm} />
            <Route path="/jobseekercontactaddform" component={JobSeekerContactAddForm} />
            <Route path="/jobseekercoverletteraddform" component={JobSeekerCoverLetterAddForm} />
            <Route path="/jobseekerlanguageaddform" component={JobSeekerLanguageAddForm} />
            <Route path="/jobseekerexperienceaddform" component={JobSeekerExperiencesAddForm} />
            <Route path="/hrmsconfirmationjobpostinglist" component={HrmsConfirmationJobPostingList} />

          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
