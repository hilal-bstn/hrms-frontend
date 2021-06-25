import React from "react";
import { Route } from "react-router";
import { Grid, Header, Image } from "semantic-ui-react";
import JobSeekerContactDetail from "../pages/JobSeekerContactDetail";
import JobSeekerExperienceDetail from "../pages/JobSeekerExperienceDetail";
import JobSeekerLanguageDetail from "../pages/JobSeekerLanguageDetail";
import JobSeekerPhotoDetail from "../pages/JobSeekerPhotoDetail";
import JobSeekerTechnologyDetail from "../pages/JobSeekerTechnologyDetail";
import JobSeekerUniversityDetail from "../pages/JobSeekerUniversityDetail";
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
