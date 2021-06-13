import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Header, Icon, Table, Image } from "semantic-ui-react";
import JobSeekerExperienceService from "../services/jobSeekerExperienceService";

export default function JobSeekerExperienceDetail() {
  let { id } = useParams();

  const [jobSeekerExperiences, setJobSeekerExperiences] = useState([]);

  useEffect(() => {
    let jobSeekerExperienceService = new JobSeekerExperienceService();
    jobSeekerExperienceService
      .getTerminationYearAsc(id)
      .then((result) => setJobSeekerExperiences(result.data.data));
  }, []);
  return (
    <div>
      <Table celled collapsing style={{ borderStyle: "none" }}>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Şirket İsmi</Table.HeaderCell>
            <Table.HeaderCell>Pozisyon</Table.HeaderCell>
            <Table.HeaderCell>Başlangıç Yılı</Table.HeaderCell>
            <Table.HeaderCell>Bitiş Yılı</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {jobSeekerExperiences.map((jobSeekerExperience) => (
            <Table.Row>
              <Table.Cell>
                <Header as="h4" image>
                  <Icon name="suitcase" circular />
                  <Header.Content>
                    {jobSeekerExperience.companyName}
                  </Header.Content>
                </Header>
              </Table.Cell>
              <Table.Cell>{jobSeekerExperience.jobPosition.title}</Table.Cell>
              <Table.Cell>{jobSeekerExperience.employmentStartYear}</Table.Cell>
              <Table.Cell>
                {jobSeekerExperience.terminationYear == 0
                  ? "Devam Ediyor"
                  : jobSeekerExperience.terminationYear}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
