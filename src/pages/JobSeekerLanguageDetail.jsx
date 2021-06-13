import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Header, Icon, Table, Rating } from "semantic-ui-react";
import JobSeekerLanguageService from "../services/jobSeekerLanguageService";

export default function JobSeekerLanguageDetail() {
    let { id } = useParams();

  const [jobSeekerLanguages, setJobSeekerLanguages] = useState([]);

  useEffect(()=>{
    let jobSeekerLanguageService = new JobSeekerLanguageService()
    jobSeekerLanguageService.getJobSeekerLanguage(id).then(result=>setJobSeekerLanguages(result.data.data))
  },[])
    return (
        <div>
            <Table celled collapsing style={{ borderStyle: "none" }}>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Dil</Table.HeaderCell>
            <Table.HeaderCell>Seviye(1-5)</Table.HeaderCell>
            
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {jobSeekerLanguages.map((jobSeekerLanguage) => (
            <Table.Row>
              <Table.Cell>
                <Header as="h4" image>
                  <Icon name="language" circular />
                  <Header.Content>
                    {jobSeekerLanguage.language.name}
                  </Header.Content>
                </Header>
              </Table.Cell>
              <Table.Cell> <Rating icon='star' defaultRating={jobSeekerLanguage.languageLevel} maxRating={jobSeekerLanguage.languageLevel} /></Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
        </div>
    )
}
