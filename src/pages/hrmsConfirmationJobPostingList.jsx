import React, { useState, useEffect } from "react";
import JobPostingConfirmationService from "../services/jobPostingConfirmationService";
import { Button, Icon, Label, Menu, Table } from "semantic-ui-react";

export default function HrmsConfirmationJobPostingList() {
  const [JobPostingConfirmations, setJobPostingConfirmations] = useState([]);
  let jobPostingConfirmationService = new JobPostingConfirmationService();

  useEffect(() => {
    jobPostingConfirmationService
      .getByHrmsEmployeeConfirmation()
      .then((result) => setJobPostingConfirmations(result.data.data));
  });
  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Şehir</Table.HeaderCell>
            <Table.HeaderCell>Şirket İsmi</Table.HeaderCell>
            <Table.HeaderCell>Pozisyon</Table.HeaderCell>
            <Table.HeaderCell>Posizyon Açığı</Table.HeaderCell>
            <Table.HeaderCell>Maaş Aralığı</Table.HeaderCell>
            <Table.HeaderCell>İş Tanımı</Table.HeaderCell>
            <Table.HeaderCell>Onay ver</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {JobPostingConfirmations.map((jobPostingConfirmation) => (
            <Table.Row key={jobPostingConfirmation.id}>
              <Table.Cell>{jobPostingConfirmation.city.name}</Table.Cell>
              <Table.Cell>
                {
                  jobPostingConfirmation.employerJobPosting.employer.company
                    .companyName
                }
              </Table.Cell>
              <Table.Cell>{jobPostingConfirmation.jobPosition.name}</Table.Cell>
              <Table.Cell>
                {jobPostingConfirmation.employerJobPosting.openPositionCount}
              </Table.Cell>
              <Table.Cell>
                {jobPostingConfirmation.employerJobPosting.minSalary === 0
                  ? "Belirtilmemiş"
                  : jobPostingConfirmation.employerJobPosting.minSalary}
                -{" "}
                {jobPostingConfirmation.employerJobPosting.maxSalary === 0
                  ? "Belirtilmemiş"
                  : jobPostingConfirmation.employerJobPosting.maxSalary}
              </Table.Cell>
              <Table.Cell>
                {jobPostingConfirmation.employerJobPosting.jobDescription}
              </Table.Cell>

              <Table.Cell>
                <Button primary type="submit">
                  Onay Ver
                </Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
