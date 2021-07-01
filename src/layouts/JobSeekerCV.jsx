import React from "react";
import { Route } from "react-router";
import { Grid} from "semantic-ui-react";
import JobSeekerPhotoDetail  from"../pages/JobSeeker/JobSeekerDetail/JobSeekerPhotoDetail";
import JobSeekerExperienceDetail  from"../pages/JobSeeker/JobSeekerDetail/JobSeekerExperienceDetail";
import JobSeekerUniversityDetail  from"../pages/JobSeeker/JobSeekerDetail/JobSeekerUniversityDetail";
import JobSeekerTechnologyDetail  from"../pages/JobSeeker/JobSeekerDetail/JobSeekerTechnologyDetail";
import JobSeekerLanguageDetail  from"../pages/JobSeeker/JobSeekerDetail/JobSeekerLanguageDetail";
import JobSeekerContactDetail  from"../pages/JobSeeker/JobSeekerDetail/JobSeekerContactDetail";

export default function JobSeekerCV() {
  return (
    <div>
      <Route
            path="/jobseekercv/:id"
            component={
              JobSeekerPhotoDetail
            }
          />
      <Grid>
        <Grid.Row style={{ marginBottom: "20px" }}>
          <Route
            path="/jobseekercv/:id"
            component={JobSeekerExperienceDetail}
          />
        </Grid.Row>
        <Grid.Row style={{ marginBottom: "20px" }}>
          <Route
            path="/jobseekercv/:id"
            component={JobSeekerUniversityDetail}
          />
        </Grid.Row>
        <Grid.Row style={{ marginBottom: "20px" }}>
          <Route
            path="/jobseekercv/:id"
            component={JobSeekerTechnologyDetail}
          />
        </Grid.Row>
        <Grid.Row style={{ marginBottom: "20px" }}>
          <Route path="/jobseekercv/:id" component={JobSeekerLanguageDetail} />
        </Grid.Row>
        <Grid.Row style={{ marginBottom: "20px" }}>
          <Route path="/jobseekercv/:id" component={JobSeekerContactDetail} />
        </Grid.Row>
      </Grid>
    </div>
  );
}
