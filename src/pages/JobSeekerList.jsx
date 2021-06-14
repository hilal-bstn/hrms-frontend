import React, { useState, useEffect } from "react";
import { Icon, Label, Menu, Table } from "semantic-ui-react";
import JobSeekerService from "../services/jobSeekerService";

export default function JobSeekerList() {
  const [jobSeekers, setJobSeekers] = useState([]);

  useEffect(() => {
    let jobSeekerService = new JobSeekerService();
    jobSeekerService
      .getJobSeeker()
      .then((result) => setJobSeekers(result.data.data));
  });
  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Adı</Table.HeaderCell>
            <Table.HeaderCell>Soyadı</Table.HeaderCell>
            <Table.HeaderCell>Tc Kimlik Numarası</Table.HeaderCell>
            <Table.HeaderCell>Doğum Yılı</Table.HeaderCell>
            <Table.HeaderCell>Email</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {jobSeekers.map((jobSeeker) => (
            <Table.Row>
              <Table.Cell>{jobSeeker.firstName}</Table.Cell>
              <Table.Cell>{jobSeeker.lastName}</Table.Cell>
              <Table.Cell>{jobSeeker.identityNumber}</Table.Cell>
              <Table.Cell>{jobSeeker.yearOfBirth}</Table.Cell>
              <Table.Cell>{jobSeeker.user.email}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="5">
              <Menu floated="right" pagination>
                <Menu.Item as="a" icon>
                  <Icon name="chevron left" />
                </Menu.Item>
                <Menu.Item as="a">1</Menu.Item>
                <Menu.Item as="a">2</Menu.Item>
                <Menu.Item as="a">3</Menu.Item>
                <Menu.Item as="a">4</Menu.Item>
                <Menu.Item as="a" icon>
                  <Icon name="chevron right" />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </div>
  );
}
