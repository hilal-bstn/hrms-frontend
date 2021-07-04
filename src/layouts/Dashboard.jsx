import React from "react";
import { Route } from "react-router";
import { Grid } from "semantic-ui-react";
import EmployerDetail from "../pages/Employer/EmployerDetail/EmployerDetail";
import EmployerList from "../pages/Employer/EmployerList/EmployerList";
import HrmsEmployeeUpdateForm from "../pages/Hrms/HrmsForms/HrmsEmployeeUpdateForm";
import HrmsConfirmationJobPostingList from "../pages/Hrms/Confirmations/HrmsConfirmationJobPostingList";
import EmployerUpdateConfirmationList from "../pages/Hrms/Confirmations/EmployerUpdateConfirmationList";
import EmployerUpdateConfirmationDetail from "../pages/Hrms/Confirmations/EmployerUpdateConfirmationDetail";
import EmployerIdActiveJobPostingList from "../pages/JobPosting/JobPostingList/EmployerIdActiveJobPostingList";
import JobSeekerList from "../pages/JobSeeker/JobSeekerList/JobSeekerList";
import EmployerJobPostingList from "../pages/JobPosting/JobPostingList/EmployerJobPostingList";
import EmployerJobPostingDetail from "../pages/JobPosting/JobPostingDetail/EmployerJobPostingDetail";
import Main from "../layouts/Main";
import JobSeekerCV from "../layouts/JobSeekerCV";
import EmployerJobPostingAddForm from "../pages/JobPosting/JobPostingForms/EmployerJobPostingAddForm";
import JobSeekerContactAddForm  from"../pages/JobSeeker/JobSeekerForms/JobSeekerContactAddForm";
import JobSeekerCoverLetterAddForm  from"../pages/JobSeeker/JobSeekerForms/JobSeekerCoverLetterAddForm";
import JobSeekerLanguageAddForm  from"../pages/JobSeeker/JobSeekerForms/JobSeekerLanguageAddForm";
import JobSeekerExperiencesAddForm  from"../pages/JobSeeker/JobSeekerForms/JobSeekerExperiencesAddForm";
import JobSeekerPhotoAddForm  from"../pages/JobSeeker/JobSeekerForms/JobSeekerPhotoAddForm";
import FavoriteJobPostingsOfJobSeekerList from "../pages/JobPosting/JobPostingList/FavoriteJobPostingsOfJobSeekerList";
import JobSeekerTechnologyAddForm  from"../pages/JobSeeker/JobSeekerForms/JobSeekerTechnologyAddForm";
import JobSeekerUniversityAddForm  from"../pages/JobSeeker/JobSeekerForms/JobSeekerUniversityAddForm";
import JobSeekerContactUpdateForm  from"../pages/JobSeeker/JobSeekerForms/JobSeekerContactUpdateForm";
import JobSeekerCoverLetterUpdateForm  from"../pages/JobSeeker/JobSeekerForms/JobSeekerCoverLetterUpdateForm";
import JobSeekerExperienceUpdateForm  from"../pages/JobSeeker/JobSeekerForms/JobSeekerExperienceUpdateForm";
import JobSeekerLanguageUpdateForm  from"../pages/JobSeeker/JobSeekerForms/JobSeekerLanguageUpdateForm";
import JobSeekerUniversitiyUpdateForm  from"../pages/JobSeeker/JobSeekerForms/JobSeekerUniversitiyUpdateForm";
import login  from"../pages/login";
import JobApplication  from"../pages/JobApplication";
import EmployerUpdateForm from "../pages/Employer/EmployerForms/EmployerUpdateForm";
import JobPostingFilter from "../pages/JobPosting/JobPostingFilter/JobPostingFilter";

export default function Dashboard() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={16}>
            <Route exact path="/" component={Main} />
            <Route path="/employers" component={EmployerList} />
            <Route path="/jobseekers" component={JobSeekerList} />
            <Route exact path="/employerJobPostingList" component={EmployerJobPostingList} />
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
            <Route path="/employerupdateconfirmationlist" component={EmployerUpdateConfirmationList} />
            <Route path="/employerupdateconfirmationdetail/:id" component={EmployerUpdateConfirmationDetail} />
            <Route path="/employerupdateform/:id" component={EmployerUpdateForm} />
            <Route path="/jobpostingfilter" component={JobPostingFilter} />
            <Route path="/employerJobPostingList/:cityId/:jobPositionId/:timeOfWorkId/:typeOfWorkId" component={EmployerJobPostingList} />

          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
