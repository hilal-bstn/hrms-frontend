import React from "react";
import { Header, Icon, Image, Label,Table, Rating ,Button } from "semantic-ui-react";


export default function EmployerJobPostingDetail() {
  return (
    <div>
      <Header as="h2" icon textAlign="center">
        <Icon name="suitcase" circular />
        <Header.Content>Hilal A.Ş.</Header.Content>
      </Header>
      <Table celled padded>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell singleLine>Şehir</Table.HeaderCell>
        <Table.HeaderCell>Pozisyon</Table.HeaderCell>
        <Table.HeaderCell>Alınacak Kişi Sayısı</Table.HeaderCell>
        <Table.HeaderCell>Maaş Aralığı</Table.HeaderCell>
        <Table.HeaderCell>Son Başvuru Tarihi</Table.HeaderCell>
        <Table.HeaderCell>İş Tanımı</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>
            Sakarya
        </Table.Cell>
        <Table.Cell singleLine>Yazılım Geliştirici</Table.Cell>
        <Table.Cell>
          1
        </Table.Cell>
        <Table.Cell singleLine>
          5000-6000
        </Table.Cell>
        <Table.Cell singleLine>2021-07-28</Table.Cell>
        <Table.Cell>
            2 yıl tecrübeli. 
        </Table.Cell>
      </Table.Row>
     
    </Table.Body>
  </Table>
  <Button
            content='Başvur'
            primary
          />
    </div>
  );
}
