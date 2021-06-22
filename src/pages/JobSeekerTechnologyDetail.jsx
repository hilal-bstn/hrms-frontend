import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Header, Icon, Table, Rating } from "semantic-ui-react";
import JobSeekerTechnologyService from "../services/jobSeekerTechnologyService";

export default function JobSeekerTechnologyDetail() {
  let { id } = useParams();

  const [jobSeekerTechnologies, setJobSeekerTechnologies] = useState([]);

  useEffect(() => {
    let jobSeekerTechnologyService = new JobSeekerTechnologyService();
    jobSeekerTechnologyService
      .getJobSeekerTechnology(id)
      .then((result) => setJobSeekerTechnologies(result.data.data));
  }, []);
  return (
    <div>
      <Table celled collapsing style={{ borderStyle: "none" }}>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Yetenekler</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {jobSeekerTechnologies.map((jobSeekerTechnology) => (
            <Table.Row key={jobSeekerTechnology.id}>
              <Table.Cell>
                <Header as="h4" image>
                  <Header.Content>
                    {jobSeekerTechnology.technology.name}
                  </Header.Content>
                </Header>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
