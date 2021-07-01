import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Header, Icon, Table, Button } from "semantic-ui-react";
import EmployerJobPostingService from "../../../services/employerJobPostingService";
import FavoriteJobPostingOfJobSeekerService from "../../../services/favoriteJobPostingOfJobSeekerService";

export default function EmployerJobPostingDetail() {
  let { id } = useParams();
  let favoriteJobPostingOfJobSeekerService =
    new FavoriteJobPostingOfJobSeekerService();
  const [employerJobPosting, setEmployerJobPosting] = useState({});

  useEffect(() => {
    let employerJobPostingService = new EmployerJobPostingService();
    employerJobPostingService
      .getById(id)
      .then((result) => setEmployerJobPosting(result.data.data));
  }, []);
  const addFavorite = () => {
    let values = {};
    values.jobSeeker = { id: "15" };
    values.employerJobPosting = { id: id };
    favoriteJobPostingOfJobSeekerService.add(values);
  };

  return (
    <div>
      <Header as="h2" icon textAlign="center">
        <Icon name="suitcase" circular />
        <Header.Content>
          {employerJobPosting.employer?.company.companyName}
        </Header.Content>
      </Header>
      <Button onClick={(c) => addFavorite()}>İlanı Favorilerime ekle</Button>
      <Table celled padded>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Şehir</Table.HeaderCell>
            <Table.HeaderCell>Pozisyon</Table.HeaderCell>
            <Table.HeaderCell>Alınacak Kişi Sayısı</Table.HeaderCell>
            <Table.HeaderCell>Maaş Aralığı</Table.HeaderCell>
            <Table.HeaderCell>Son Başvuru Tarihi</Table.HeaderCell>
            <Table.HeaderCell>İş Tanımı</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>{employerJobPosting.city?.name}</Table.Cell>
            <Table.Cell singleLine>
              {employerJobPosting.jobPosition?.title}
            </Table.Cell>
            <Table.Cell>{employerJobPosting.openPositionCount}</Table.Cell>
            <Table.Cell singleLine>
              {employerJobPosting.minSalary} - {employerJobPosting.maxSalary}
            </Table.Cell>
            <Table.Cell singleLine>
              {employerJobPosting.applicationDeadline}
            </Table.Cell>
            <Table.Cell>{employerJobPosting.jobDescription}</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
      <Button content="Başvur" primary />
    </div>
  );
}
