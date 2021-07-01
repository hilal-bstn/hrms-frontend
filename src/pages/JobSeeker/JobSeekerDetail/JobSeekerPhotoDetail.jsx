import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import JobSeekerPhotoService from "../../../services/jobSeekerPhotoService";
import { Header, Icon, Table, Image } from "semantic-ui-react";

export default function JobSeekerPhotoDetail() {
  let { id } = useParams();

  const [jobSeekerPhoto, setJobSeekerPhoto] = useState({});

  useEffect(() => {
    let jobSeekerPhotoService = new JobSeekerPhotoService();
    jobSeekerPhotoService
      .getJobSeekerPhoto(id)
      .then((result) => setJobSeekerPhoto(result.data.data));
  }, []);
  return (
    <div>
      <Header textAlign="center" >
        <Image
          src={
            jobSeekerPhoto === null
              ? "../default.png"
              : jobSeekerPhoto.imageUrl
          }
          circular
          style={{ width: "100px", height: "120px" }}
        />
      </Header>
    </div>
  );
}
