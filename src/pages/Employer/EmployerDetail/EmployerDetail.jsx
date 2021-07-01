import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EmployerService from "../../../services/employerService";
import { Header, Icon, Table } from "semantic-ui-react";
import EmployerUpdateConfirmationService from "../../../services/employerUpdateConfirmationService";

export default function EmployerDetail() {
  let { id } = useParams();
  let employerService = new EmployerService();
  let employerUpdateConfirmationService =
  new EmployerUpdateConfirmationService();
  const [employer, setEmployer] = useState({});
  const [employerUpdate, setEmployerUpdate] = useState({});

  useEffect(() => {
    employerService.getById(id).then((result) => setEmployer(result.data.data));
  }, []);
  return (
    //iş veren profili
    <div>
      <Header as="h2" icon textAlign="center">
        <Icon name="suitcase" circular />
        <Header.Content>
          {employer.company?.companyName}
        </Header.Content>
      </Header>
      <Table singleLine>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Website</Table.HeaderCell>
        <Table.HeaderCell>Email</Table.HeaderCell>
        <Table.HeaderCell>Telefon Numarası</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>{employer.company?.website}</Table.Cell>
        <Table.Cell>{employer.user?.email}</Table.Cell>
        <Table.Cell>{employer.company?.phone}</Table.Cell>
      </Table.Row>
      </Table.Body>
      </Table>
    </div>
  );
}
