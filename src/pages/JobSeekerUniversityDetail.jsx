import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Header, Icon, Table, Image } from "semantic-ui-react";
import JobSeekerUniversityService from "../services/jobSeekerUniversityService";

export default function JobSeekerUniversityDetail() {
  let { id } = useParams();

  const [jobSeekerUniversities, setJobSeekerUniversities] = useState([]);

  useEffect(() => {
    let jobSeekerUniversityService = new JobSeekerUniversityService();
    jobSeekerUniversityService
      .getJobSeekerUniversity(id)
      .then((result) => setJobSeekerUniversities(result.data.data));
  }, []);
  return (
    <div>
      <Table celled collapsing style={{ borderStyle: "none" }}>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Üniversite</Table.HeaderCell>
            <Table.HeaderCell>Bölüm</Table.HeaderCell>
            <Table.HeaderCell>Giriş Yılı</Table.HeaderCell>
            <Table.HeaderCell>Mezuniyet Yılı</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {jobSeekerUniversities.map((jobSeekerUniversity) => (
            <Table.Row key={jobSeekerUniversity.id}>
              <Table.Cell >
                <Header as="h4" image>
                  <Icon name="university" circular />
                  <Header.Content>
                    {jobSeekerUniversity.university.name}
                  </Header.Content>
                </Header>
              </Table.Cell>
              <Table.Cell>
                {jobSeekerUniversity.universityDepartment.name}
              </Table.Cell>
              <Table.Cell>{jobSeekerUniversity.entranceYear}</Table.Cell>
              <Table.Cell>
                {jobSeekerUniversity.graduationYear === 0
                  ? "Devam Ediyor"
                  : jobSeekerUniversity.graduationYear}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
