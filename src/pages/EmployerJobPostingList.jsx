import React, { useState, useEffect } from "react";
import { Header, Image, Table } from "semantic-ui-react";
import EmployerJobPostingService from "../services/employerJobPostingService";

export default function EmployerJobPostingList() {
  const [employerJobPostings, setEmployerJobPostings] = useState([]);

  useEffect(() => {
    let employerJobPostingService = new EmployerJobPostingService();
    employerJobPostingService.getJobPostings().then(result=>setEmployerJobPostings(result.data.data))
  
  })

  return (
    <div>
      <Table basic="very" celled collapsing>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Şirket İsmi</Table.HeaderCell>
            <Table.HeaderCell>Pozisyon</Table.HeaderCell>
            <Table.HeaderCell>Şehir</Table.HeaderCell>
            <Table.HeaderCell>Maaş Aralığı</Table.HeaderCell>
            <Table.HeaderCell>Son Başvuru Tarihi</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {employerJobPostings.map((jobPosting) => (
            <Table.Row key={jobPosting.id}>
              <Table.Cell>
                <Header as="h4" image>
                  <Image
                    src="https://react.semantic-ui.com/images/avatar/small/lena.png"
                    rounded
                    size="mini"
                  />
                  <Header.Content>{jobPosting.employer.company.companyName}</Header.Content>
                </Header>
              </Table.Cell>
              <Table.Cell>{jobPosting.jobPosition.title}</Table.Cell>
              <Table.Cell>{jobPosting.city.name}</Table.Cell>
              <Table.Cell>{jobPosting.minSalary} - {jobPosting.maxSalary}</Table.Cell>
              <Table.Cell>{jobPosting.applicationDeadline}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
