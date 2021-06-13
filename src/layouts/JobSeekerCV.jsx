import React from "react";
import { Route } from "react-router";
import { Grid ,Header,Image} from "semantic-ui-react";
import JobSeekerContactDetail from "../pages/JobSeekerContactDetail";
import JobSeekerExperienceDetail from "../pages/JobSeekerExperienceDetail";
import JobSeekerLanguageDetail from "../pages/JobSeekerLanguageDetail";
import JobSeekerTechnologyDetail from "../pages/JobSeekerTechnologyDetail";
import JobSeekerUniversityDetail from "../pages/JobSeekerUniversityDetail";
export default function JobSeekerCV() {
  return (
    <div>
       <Header as="h2"  textAlign="center">
       <Image src='/logo.png' size='medium' circular />
      </Header>
      <Grid >
        <Grid.Row style={{marginBottom:"20px"}}>
            <Route
              path="/jobSeekerCV/:id"
              component={JobSeekerExperienceDetail}
            />
           
        </Grid.Row>
        <Grid.Row style={{marginBottom:"20px"}}>
        <Route
              path="/jobSeekerCV/:id"
              component={JobSeekerUniversityDetail}
            />
        </Grid.Row>
        <Grid.Row style={{marginBottom:"20px"}}>
        <Route
              path="/jobSeekerCV/:id"
              component={JobSeekerTechnologyDetail}
            />
        </Grid.Row>
        <Grid.Row style={{marginBottom:"20px"}}>
        <Route
              path="/jobSeekerCV/:id"
              component={JobSeekerLanguageDetail}
            />
        </Grid.Row>
        <Grid.Row style={{marginBottom:"20px"}}>
        <Route path="/jobSeekerCV/:id" component={JobSeekerContactDetail} />

        </Grid.Row>
      </Grid>
    </div>
  );
}
