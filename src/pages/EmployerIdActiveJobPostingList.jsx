import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useFormik } from "formik";
import { Button, Table } from "semantic-ui-react";
import EmployerJobPostingService from "../services/employerJobPostingService";

export default function EmployerIdActiveJobPostingList() {
  let { id } = useParams(); //employer id
  let employerJobPostingService = new EmployerJobPostingService();
  const [employerJobPostings, setEmployerJobPostings] = useState([]);

  useEffect(() => {
    employerJobPostingService
      .getByEmployerIdAndIsActive(id)
      .then((result) => setEmployerJobPostings(result.data.data));
  });
  const deleteEmployerJobPosting = (id) => {
    employerJobPostingService.deleteEmployerJobPosting(id);
  };
  return (
    //işverenin aktif iş ilanlarını görüp kaldırabilmesi.
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Şehir</Table.HeaderCell>
            <Table.HeaderCell>Pozisyon</Table.HeaderCell>
            <Table.HeaderCell>Posizyon Açığı</Table.HeaderCell>
            <Table.HeaderCell>Maaş Aralığı</Table.HeaderCell>
            <Table.HeaderCell>İş Tanımı</Table.HeaderCell>
            <Table.HeaderCell>Son Başvuru Tarihi</Table.HeaderCell>
            <Table.HeaderCell> </Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {employerJobPostings.map((employerJobPosting) => (
            <Table.Row key={employerJobPosting.id}>
              <Table.Cell>{employerJobPosting.city.name}</Table.Cell>

              <Table.Cell>{employerJobPosting.jobPosition.title}</Table.Cell>
              <Table.Cell>{employerJobPosting.openPositionCount}</Table.Cell>
              <Table.Cell>
                {employerJobPosting.minSalary} - {employerJobPosting.maxSalary}
              </Table.Cell>
              <Table.Cell>{employerJobPosting.jobDescription}</Table.Cell>
              <Table.Cell>{employerJobPosting.applicationDeadline}</Table.Cell>
              <Table.Cell>
                <Button
                  primary
                  type="submit"
                  onClick={(d) =>
                    deleteEmployerJobPosting(employerJobPosting.id)
                  }
                >
                  İlanı Yayından Kaldır
                </Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
