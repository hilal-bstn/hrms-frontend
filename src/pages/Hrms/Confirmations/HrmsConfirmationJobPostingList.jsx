import React, { useState, useEffect } from "react";
import JobPostingConfirmationService from "../../../services/jobPostingConfirmationService";
import { Button, Table, Card, Icon } from "semantic-ui-react";
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
      <br />
      <br />
      <Card.Group>
        {JobPostingConfirmations.map(
          (
            jobPostingConfirmation //profil ekle (işveren)
          ) => (
            <Card key={jobPostingConfirmation.id} fluid>
              <Card.Content>
                <Icon name="suitcase" circular size="large" />
                <Card.Header>
                  {
                    jobPostingConfirmation.employerJobPosting.employer.company
                      .companyName
                  }
                </Card.Header>
                <Card.Meta>
                  Son Başvuru Tarihi :
                  {
                    jobPostingConfirmation.employerJobPosting
                      .applicationDeadline
                  }
                </Card.Meta>
                <Card.Description>
                  <Icon name="map marker" size="midi" />
                  {jobPostingConfirmation.employerJobPosting.city.name},
                  {jobPostingConfirmation.employerJobPosting.jobPosition.title}
                  <br />
                  {jobPostingConfirmation.employerJobPosting.timeOfWork.name},
                  {jobPostingConfirmation.employerJobPosting.typeOfWork.name}
                  <br />
                  Pozisyon Açığı :{" "}
                  {jobPostingConfirmation.employerJobPosting.openPositionCount}
                 ,{" "} Maaş Aralığı :{" "}
                  {jobPostingConfirmation.employerJobPosting.minSalary}-
                  {jobPostingConfirmation.employerJobPosting.maxSalary}
                  <br />
                  {jobPostingConfirmation.employerJobPosting.jobDescription}
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <div className="ui two buttons">
                  <Button
                    basic
                    color="green"
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
                </div>
              </Card.Content>
            </Card>
          )
        )}
      </Card.Group>
    </div>
  );
}
