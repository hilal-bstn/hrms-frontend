import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import JobSeekerContactService from "../../../services/jobSeekerContactService";
import { Header, Icon, Table, Image } from "semantic-ui-react";

export default function JobSeekerContactDetail() {
  let { id } = useParams();

  const [jobSeekerContact, setJobSeekerContact] = useState({});

  useEffect(() => {
    let jobSeekerContactService = new JobSeekerContactService();
    jobSeekerContactService
      .getJobSeekerContact(id)
      .then((result) => setJobSeekerContact(result.data.data));
  }, []);
  return (
    <div>
      <Table celled collapsing style={{ borderStyle: "none" }}>
        <Table.Body>
          <Table.Row key={jobSeekerContact.id}>
            <Table.Cell>
              <Header as="h4" image>
                <Icon name="github" circular />
                <Header.Content>Github</Header.Content>
              </Header>
            </Table.Cell>
            <Table.Cell>{jobSeekerContact.github}</Table.Cell>
          </Table.Row>
          <Table.Row >
            <Table.Cell>
              <Header as="h4" image>
                <Icon name="linkedin" circular />
                <Header.Content>Linkedin</Header.Content>
              </Header>
            </Table.Cell>
            <Table.Cell>{jobSeekerContact.linkedin}</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
}
