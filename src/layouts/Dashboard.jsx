import React from "react";
import { Route } from "react-router";
import { Grid } from "semantic-ui-react";
import EmployerDetail from "../pages/EmployerDetail";
import EmployerIdActiveJobPostingList from "../pages/EmployerIdActiveJobPostingList";
import EmployerJobPostingAddForm from "../pages/EmployerJobPostingAddForm";
import EmployerJobPostingDetail from "../pages/EmployerJobPostingDetail";
import EmployerJobPostingList from "../pages/EmployerJobPostingList";
import EmployerList from "../pages/EmployerList";
import FavoriteJobPostingsOfJobSeekerList from "../pages/FavoriteJobPostingsOfJobSeekerList";
import HrmsConfirmationJobPostingList from "../pages/HrmsConfirmationJobPostingList";
import HrmsEmployeeUpdateForm from "../pages/HrmsEmployeeUpdateForm";
import JobApplication from "../pages/JobApplication";
import JobSeekerContactAddForm from "../pages/JobSeekerContactAddForm";
import JobSeekerContactUpdateForm from "../pages/JobSeekerContactUpdateForm";
import JobSeekerCoverLetterAddForm from "../pages/JobSeekerCoverLetterAddForm";
import JobSeekerCoverLetterUpdateForm from "../pages/JobSeekerCoverLetterUpdateForm";
import JobSeekerExperiencesAddForm from "../pages/JobSeekerExperiencesAddForm";
import JobSeekerExperienceUpdateForm from "../pages/JobSeekerExperienceUpdateForm";
import JobSeekerLanguageAddForm from "../pages/JobSeekerLanguageAddForm";
import JobSeekerLanguageUpdateForm from "../pages/JobSeekerLanguageUpdateForm";
import JobSeekerList from "../pages/JobSeekerList";
import JobSeekerPhotoAddForm from "../pages/JobSeekerPhotoAddForm";
import JobSeekerTechnologyAddForm from "../pages/JobSeekerTechnologyAddForm";
import JobSeekerUniversitiyUpdateForm from "../pages/JobSeekerUniversitiyUpdateForm";
import JobSeekerUniversityAddForm from "../pages/JobSeekerUniversityAddForm";
import login from "../pages/login";
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
            <Route path="/login" component={login} />
            <Route path="/employeridactivejobpostinglist/:id" component={EmployerIdActiveJobPostingList} />
            <Route path="/jobseekerphotoaddform" component={JobSeekerPhotoAddForm} />
            <Route path="/jobapplication/:id" component={JobApplication} />
            <Route path="/favoritejobpostingofjobseeker" component={FavoriteJobPostingsOfJobSeekerList} />
            <Route path="/employerdetail/:id" component={EmployerDetail} />
            <Route path="/jobseekertechnologyaddfom" component={JobSeekerTechnologyAddForm} />
            <Route path="/jobseekeruniversityaddfom" component={JobSeekerUniversityAddForm} />
            <Route path="/jobseekercontactupdateform/:id" component={JobSeekerContactUpdateForm} />
            <Route path="/jobseekercoverletterupdateform/:id" component={JobSeekerCoverLetterUpdateForm} />
            <Route path="/jobseekerexperienceupdateform/:id" component={JobSeekerExperienceUpdateForm} />
            <Route path="/jobseekerlanguageupdateform/:id" component={JobSeekerLanguageUpdateForm} />
            <Route path="/jobseekeruniversityupdateform/:id" component={JobSeekerUniversitiyUpdateForm} />
            <Route path="/hrmsemployeeupdateform/:id" component={HrmsEmployeeUpdateForm} />

          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
