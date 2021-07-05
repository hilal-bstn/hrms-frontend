import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Header, Icon, Table, Button, Label, Container } from "semantic-ui-react";
import EmployerJobPostingService from "../../../services/employerJobPostingService";
import FavoriteJobPostingOfJobSeekerService from "../../../services/favoriteJobPostingOfJobSeekerService";

export default function EmployerJobPostingDetail() {
  let { id } = useParams();
  let favoriteButtonAddText = "İlanı Favorilere Ekle";
  let favoriteButtonDeleteText = "İlanı Favorilerden Sil";
  let favoriteJobPostingOfJobSeekerService =
    new FavoriteJobPostingOfJobSeekerService();
  const [employerJobPosting, setEmployerJobPosting] = useState({});
  const [favoriteJobPostingOfJobSeeker, setFavoriteJobPostingOfJobSeeker] =
    useState({});
  const [buttonText, setButtonText] = useState({});//button yazısını ayarlama favorilere ekle -sil

  useEffect(() => {
    let employerJobPostingService = new EmployerJobPostingService();
    employerJobPostingService
      .getById(id)
      .then((result) => setEmployerJobPosting(result.data.data));
    favoriteJobPostingOfJobSeekerService
      .getByJobSeekerIdAndEmployerJobPostingId(15, id)
      .then((result) => {
        setFavoriteJobPostingOfJobSeeker(result.data.data);
        if (result.data.data === null) {//sayfa yüklenirken
          setButtonText({ text: favoriteButtonAddText });
        } else {
          setButtonText({ text: favoriteButtonDeleteText });
        }
      }); 
  }, []);
  
  const addFavorite = () => {
    let values = {};
    values.jobSeeker = { id: "15" };
    values.employerJobPosting = { id: id };
    favoriteJobPostingOfJobSeekerService.add(values);
  };
  const deleteFavorite = () => {
    let values = {};
    values.jobSeeker = { id: "15" };
    values.employerJobPosting = { id: id };
    favoriteJobPostingOfJobSeekerService.delete(
      values.jobSeeker.id,
      values.employerJobPosting.id
    );
  };
  const favoriteButton = () => {
    {//button click olduğunda 
      favoriteJobPostingOfJobSeekerService
        .getByJobSeekerIdAndEmployerJobPostingId(15, id)
        .then((result) => {
          setFavoriteJobPostingOfJobSeeker(result.data.data);//datayı setleme
          if (result.data.data) {
            deleteFavorite();
            setButtonText({ text: favoriteButtonAddText }); 
          } else {
            addFavorite();
            setButtonText({ text: favoriteButtonDeleteText }); 
          }
        });
    }
  };

  return (
    <div>
      <Header as="h2" icon textAlign="center">
        <Icon name="suitcase" circular />
        <Header.Content>
          {employerJobPosting.employer?.company.companyName}
        </Header.Content>
      </Header>
    
     <Label>Yayınlanma Tarihi : {employerJobPosting.releaseDate}</Label> <br/>
      <br/>
      <Button
        onClick={() => {
          favoriteButton();
        }}
        negative
      >
        {buttonText.text}
      </Button>
      <Table celled padded>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Şehir</Table.HeaderCell>
            <Table.HeaderCell>Pozisyon</Table.HeaderCell>
            <Table.HeaderCell>Alınacak Kişi Sayısı</Table.HeaderCell>
            <Table.HeaderCell>Çalışma Tipi</Table.HeaderCell>
            <Table.HeaderCell>Çalışma Zamanı</Table.HeaderCell>
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
            <Table.Cell>{employerJobPosting.typeOfWork?.name}</Table.Cell>
            <Table.Cell>{employerJobPosting.timeOfWork?.name}</Table.Cell>
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
