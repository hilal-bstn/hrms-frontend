import React, { useState, useEffect } from "react";
import JobPostingConfirmationService from "../../../services/jobPostingConfirmationService";
import { Button, Table } from "semantic-ui-react";
import EmployerJobPostingService from "../../../services/employerJobPostingService";

export default function HrmsConfirmationJobPostingList() {
  const [JobPostingConfirmations, setJobPostingConfirmations] = useState([]);

  let jobPostingConfirmationService = new JobPostingConfirmationService();
  let employerJobPostingService = new EmployerJobPostingService();
  useEffect(() => {
    jobPostingConfirmationService
      .getByHrmsEmployeeConfirmation()
      .then((result) => setJobPostingConfirmations(result.data.data));
  });
  const hrmsConfirmation = (jobPostingConfirmationId, jobPostingId) => {
    jobPostingConfirmationService.add(jobPostingConfirmationId);
    employerJobPostingService.release(jobPostingId);
  };
  return (
    <div>
      <b>Onay bekleyen iş ilanları</b>
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
          {JobPostingConfirmations.map(
            (
              jobPostingConfirmation //profil ekle (işveren)
            ) => (
              <Table.Row key={jobPostingConfirmation.id}>
                <Table.Cell>
                  {jobPostingConfirmation.employerJobPosting.city.name}
                </Table.Cell>
                <Table.Cell>
                  {
                    jobPostingConfirmation.employerJobPosting.employer.company
                      .companyName
                  }
                </Table.Cell>
                <Table.Cell>
                  {jobPostingConfirmation.employerJobPosting.jobPosition.title}
                </Table.Cell>
                <Table.Cell>
                  {jobPostingConfirmation.employerJobPosting.openPositionCount}
                </Table.Cell>
                <Table.Cell>
                  {jobPostingConfirmation.employerJobPosting.minSalary === 0
                    ? "Belirtilmemiş"
                    : jobPostingConfirmation.employerJobPosting.minSalary}
                  -
                  {jobPostingConfirmation.employerJobPosting.maxSalary === 0
                    ? "Belirtilmemiş"
                    : jobPostingConfirmation.employerJobPosting.maxSalary}
                </Table.Cell>
                <Table.Cell>
                  {jobPostingConfirmation.employerJobPosting.jobDescription}
                </Table.Cell>

                <Table.Cell>
                  <Button
                    primary
                    type="submit"
                    onClick={(c) =>
                      hrmsConfirmation(
                        jobPostingConfirmation.id,
                        jobPostingConfirmation.employerJobPosting.id
                      )
                    }
                  >
                    Onay Ver
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
