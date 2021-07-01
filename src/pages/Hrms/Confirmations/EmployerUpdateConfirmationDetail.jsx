import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Table } from "semantic-ui-react";
import EmployerUpdateConfirmationService from "../../../services/employerUpdateConfirmationService";

export default function EmployerUpdateConfirmationDetail() {
  let { id } = useParams();
  let employerUpdateConfirmationService =
    new EmployerUpdateConfirmationService();
  const [employerUpdateConfirmation, setEmployerUpdateConfirmation] = useState(
    {}
  );
  useEffect(() => {
    employerUpdateConfirmationService
      .getById(id)
      .then((result) => setEmployerUpdateConfirmation(result.data.data));
  }, []);

  const confirmation = (employerUpdateConfirmationId) => {
    employerUpdateConfirmationService.confirmation(
      employerUpdateConfirmationId
    );
  };
  const updateFailed = (employerUpdateConfirmationId) => {
    employerUpdateConfirmationService.updateFailed(
      employerUpdateConfirmationId
    );
  };
  return (
    <div>
      <b>İşveren Eski Bilgiler</b>
      <Table celled padded>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Şirket İsmi</Table.HeaderCell>
            <Table.HeaderCell>Telefon</Table.HeaderCell>
            <Table.HeaderCell>Website</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>
              {employerUpdateConfirmation.company?.companyName}
            </Table.Cell>
            <Table.Cell singleLine>
              {employerUpdateConfirmation.company?.phone}
            </Table.Cell>
            <Table.Cell>
              {employerUpdateConfirmation.company?.website}
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
      <b>İşveren Yeni Bilgiler</b>
      <Table celled padded>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Şirket İsmi</Table.HeaderCell>
            <Table.HeaderCell>Telefon</Table.HeaderCell>
            <Table.HeaderCell>Website</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>{employerUpdateConfirmation.companyName}</Table.Cell>
            <Table.Cell singleLine>
              {employerUpdateConfirmation.phone}
            </Table.Cell>
            <Table.Cell>{employerUpdateConfirmation.website}</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
      <Button
        primary
        type="submit"
        onClick={(c) => confirmation(employerUpdateConfirmation.id)}
      >
        Onay Ver
      </Button>
      <Button
        negative
        type="submit"
        onClick={(c) => updateFailed(employerUpdateConfirmation.id)}
      >
        Reddet
      </Button>
    </div>
  );
}