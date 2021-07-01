import React, { useState, useEffect } from "react";
import FavoriteJobPostingOfJobSeekerService from "../../../services/favoriteJobPostingOfJobSeekerService";
import { Button, Table } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default function FavoriteJobPostingsOfJobSeekerList() {
  const [favoriteJobPostingsOfJobSeeker, setFavoriteJobPostingsOfJobSeeker] =
    useState([]);
  let favoriteJobPostingOfJobSeekerService =
    new FavoriteJobPostingOfJobSeekerService();
  useEffect(() => {
    let jobSeekerId = "15";
    favoriteJobPostingOfJobSeekerService
      .getByJobSeekerId(jobSeekerId)
      .then((result) => setFavoriteJobPostingsOfJobSeeker(result.data.data));
  });
  const deleteFavorite = (id) => {
   console.log(id)
     favoriteJobPostingOfJobSeekerService.delete(id);
  };
  return (
    <div>
      <b>Favori iş ilanları</b>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Şehir</Table.HeaderCell>
            <Table.HeaderCell>Şirket İsmi</Table.HeaderCell>
            <Table.HeaderCell>Pozisyon</Table.HeaderCell>
            <Table.HeaderCell>Maaş Aralığı</Table.HeaderCell>
            <Table.HeaderCell>İş Tanımı</Table.HeaderCell>
            <Table.HeaderCell>Son Başvuru Tarihi</Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {favoriteJobPostingsOfJobSeeker.map(
            (favoriteJobPostingOfJobSeeker) => (
              <Table.Row key={favoriteJobPostingOfJobSeeker.id}>
                <Table.Cell>
                  {favoriteJobPostingOfJobSeeker.employerJobPosting.city.name}
                </Table.Cell>
                <Table.Cell>
                  {
                    favoriteJobPostingOfJobSeeker.employerJobPosting.employer
                      .company.companyName
                  }
                </Table.Cell>
                <Table.Cell>
                  {
                    favoriteJobPostingOfJobSeeker.employerJobPosting.jobPosition
                      .title
                  }
                </Table.Cell>
               
                <Table.Cell>
                  {favoriteJobPostingOfJobSeeker.employerJobPosting
                    .minSalary === 0
                    ? "Belirtilmemiş"
                    : favoriteJobPostingOfJobSeeker.employerJobPosting
                        .minSalary}
                  -
                  {favoriteJobPostingOfJobSeeker.employerJobPosting
                    .maxSalary === 0
                    ? "Belirtilmemiş"
                    : favoriteJobPostingOfJobSeeker.employerJobPosting
                        .maxSalary}
                </Table.Cell>
                <Table.Cell>
                  {
                    favoriteJobPostingOfJobSeeker.employerJobPosting
                      .jobDescription
                  }
                </Table.Cell>
                <Table.Cell>
                  {
                    favoriteJobPostingOfJobSeeker.employerJobPosting
                      .applicationDeadline
                  }
                </Table.Cell>
                <Table.Cell>
                <Link to={`/jobposting/${favoriteJobPostingOfJobSeeker.employerJobPosting.id}`}>
                 <Button primary type="submit">İlan detayları</Button> 
                  </Link>
                </Table.Cell>
                <Table.Cell>
                  <Button primary type="submit" onClick={(d) =>
                      deleteFavorite(
                        favoriteJobPostingOfJobSeeker.id,
                      )
                    }>
                    Favorilerden kaldır
                  </Button>
                </Table.Cell>
                
              </Table.Row>
            )
          )}
        </Table.Body>
      </Table>
    </div>
  );
}
