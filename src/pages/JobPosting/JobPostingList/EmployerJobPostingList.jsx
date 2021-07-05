import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Header, Image, Table, Icon,Card } from "semantic-ui-react";
import EmployerJobPostingService from "../../../services/employerJobPostingService";

export default function EmployerJobPostingList() {
  //!?
  let { cityId,jobPositionId,timeOfWorkId,typeOfWorkId } = useParams();
  const [employerJobPostings, setEmployerJobPostings] = useState([]);

  useEffect(() => {
    let employerJobPostingService = new EmployerJobPostingService();
    if(cityId==="0"){cityId=""}
    if(jobPositionId==="0"){jobPositionId=""}
    if(timeOfWorkId==="0"){timeOfWorkId=""}
    if(typeOfWorkId==="0"){typeOfWorkId=""}
    if (cityId||jobPositionId||timeOfWorkId||typeOfWorkId)
    {
      employerJobPostingService.getByFilter(cityId,jobPositionId,typeOfWorkId,timeOfWorkId)
      .then((result) => setEmployerJobPostings(result.data.data));
    }
    else{
      employerJobPostingService
      .getJobPostings()
      .then((result) => setEmployerJobPostings(result.data.data));
      
    }
    
      
  }, []);

  return (
    <div>{employerJobPostings.map((jobPosting) => (
      <Card.Group key={jobPosting.id}>
    <Card fluid>
      <Card.Content>
      <Icon name="suitcase" circular size="large"/>
        <Card.Header><Link to={`/jobposting/${jobPosting.id}`}>
                      {jobPosting.employer.company.companyName}
                    </Link></Card.Header>
        <Card.Meta>Son Başvuru Tarihi : {jobPosting.applicationDeadline}</Card.Meta>
        <Icon name="map marker"  size="small"/>
        {jobPosting.city.name}, {jobPosting.jobPosition.title}
      </Card.Content>
      </Card>
  </Card.Group>))}
    </div>
  );
}