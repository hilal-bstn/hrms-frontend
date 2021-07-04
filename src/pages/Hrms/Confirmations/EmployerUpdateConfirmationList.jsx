import React, { useEffect, useState } from 'react'
import EmployerUpdateConfirmationService from '../../../services/employerUpdateConfirmationService';
import { Button, Table } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default function EmployerUpdateConfirmationList() {
    const [employerUpdateConfirmations, setEmployerUpdateConfirmations] = useState([]);

  let employerUpdateConfirmationService = new EmployerUpdateConfirmationService();
  useEffect(() => {
    employerUpdateConfirmationService
      .getByIsActive()
      .then((result) => setEmployerUpdateConfirmations(result.data.data));
  },[]);
  //Güncelleme bekleyenler(yeni bilgiler detay sayfasında.)
    return (
        <div>
             <b >Güncelleme Bekleyen İşVeren Listesi</b>
             <Table  textAlign='center' >
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Şirket İsmi</Table.HeaderCell>
            <Table.HeaderCell>  </Table.HeaderCell>

          </Table.Row>
        </Table.Header>
        <Table.Body>
          {employerUpdateConfirmations.map(
            (
                employerUpdateConfirmation 
            ) => (
              <Table.Row key={employerUpdateConfirmation.id}>
                <Table.Cell>
                    {employerUpdateConfirmation.company.companyName}
                </Table.Cell>
                <Table.Cell>
                <Link to={`/employerupdateconfirmationdetail/${employerUpdateConfirmation.id}`}>                   
                  <Button
                    primary
                    type="submit"
                  >
                      Güncellemeyi Gör
                  </Button>
                  </Link>
                </Table.Cell>
                
              </Table.Row>
            )
          )}
        </Table.Body>
      </Table>
        </div>
    )
}
