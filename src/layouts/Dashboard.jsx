import React from "react";
import { Route } from "react-router";
import { Container, Button, Icon, Menu } from "semantic-ui-react";
import { Grid } from "semantic-ui-react";
import EmployerJobPostingDetail from "../pages/EmployerJobPostingDetail";
import EmployerJobPostingList from "../pages/EmployerJobPostingList";
import JobSeekerContactDetail from "../pages/JobSeekerContactDetail";
import JobSeekerExperienceDetail from "../pages/JobSeekerExperienceDetail";
import JobSeekerLanguageDetail from "../pages/JobSeekerLanguageDetail";
import JobSeekerTechnologyDetail from "../pages/JobSeekerTechnologyDetail";
import JobSeekerUniversityDetail from "../pages/JobSeekerUniversityDetail";
import JobSeekerCV from "./JobSeekerCV";
import Main from "./Main";


export default function Dashboard() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={16}>
            <Route exact path="/" component={Main} />
            <Route path="/jobpostings" component={EmployerJobPostingList} />
            <Route path="/jobposting/:id" component={EmployerJobPostingDetail} />
            <Route path="/jobSeekerCV/:id" component={JobSeekerCV} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
