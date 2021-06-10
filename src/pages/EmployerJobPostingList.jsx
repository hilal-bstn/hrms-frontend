import React from "react";
import { Header, Image, Table } from 'semantic-ui-react'
export default function EmployerJobPostingList() {
  return (
    <div>
      <Table basic="very" celled collapsing>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Şirket İsmi</Table.HeaderCell>
            <Table.HeaderCell>Pozisyon</Table.HeaderCell>
            <Table.HeaderCell>Şehir</Table.HeaderCell>
            <Table.HeaderCell>Maaş Aralığı</Table.HeaderCell>
            <Table.HeaderCell>Yayınlanma Tarihi</Table.HeaderCell>
            <Table.HeaderCell>Son Başvuru Tarihi</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>
              <Header as="h4" image>
                <Image
                  src="https://react.semantic-ui.com/images/avatar/small/lena.png"
                  rounded
                  size="mini"
                />
                <Header.Content>
                  Hilal Baştan
                  <Header.Subheader>Bi Yazılım A.Ş.</Header.Subheader>
                </Header.Content>
              </Header>
            </Table.Cell>
            <Table.Cell>Yazılım Geliştirici</Table.Cell>
            <Table.Cell>Sakarya</Table.Cell>
            <Table.Cell>Belirtilmemiş</Table.Cell>
            <Table.Cell>1.6.2021</Table.Cell>
            <Table.Cell>10.6.2021</Table.Cell>
          </Table.Row>
         
        </Table.Body>
      </Table>
    </div>
  );
}