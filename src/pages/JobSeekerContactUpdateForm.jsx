import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useFormik } from "formik";
import JobSeekerContactService from "../services/jobSeekerContactService";
import { Button, Icon } from 'semantic-ui-react'

export default function JobSeekerContactUpdateForm() {
    let { id } = useParams();
    const [jobSeekerContact, setJobSeekerContact] = useState({});
    let jobSeekerContactService = new JobSeekerContactService();
    useEffect(() => {
     
      jobSeekerContactService
        .getJobSeekerContact(id)
        .then((result) => setJobSeekerContact(result.data.data));
    }, []);
  const formik = useFormik({
    initialValues: {
      github:"",
      linkedin: "",
    },
    onSubmit: (values) => {
     values.jobSeeker = { id: id };
     values.id=jobSeekerContact.id;
     console.log(values);
    // jobSeekerContactService.updateJobSeekerContact(values);
    },
  });
    const text = {
        width: "30%",
        padding: "5px 10px",
        margin: "8px 0",
        display: "inline",
        border: "1px solid #ccc",
        borderRadius: "4px",
        boxSizing: "border-box",
        fontSize: "15px",
        marginBottom: "15px",
      };
      const label = {
        width: "30%",
        fontSize: "20px",
      };
    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
      <Icon name="github" circular />
        <label   style={label}> <b>Github :   </b></label>
        <input
          id="github"
          name="github"
          type="url"
          style={text}
          onChange={formik.handleChange}
          value={formik.values.github}
          
        />
        <br/>
        <Icon name="linkedin" circular />
        <label style={label}><b>Linkedin :  </b></label>
        <input
          id="linkedin"
          name="linkedin"
          type="url"
          style={text}
          onChange={formik.handleChange}
          value={formik.values.linkedin}
        />
        <br/>
        <Button primary type="submit">Kaydet</Button>
      </form>
        </div>
    )
}
