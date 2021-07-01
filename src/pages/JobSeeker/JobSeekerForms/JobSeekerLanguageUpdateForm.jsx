import { useFormik } from "formik";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Button, Icon } from "semantic-ui-react";
import JobSeekerLanguageService from "../../../services/jobSeekerLanguageService";

export default function JobSeekerLanguageUpdateForm() {
    let { id } = useParams();
    const [jobSeekerLanguage, setJobSeekerLanguage] = useState({});
    let jobSeekerLanguageService = new JobSeekerLanguageService();
    useEffect(() => {
     
        jobSeekerLanguageService
        .getById(id)
        .then((result) => setJobSeekerLanguage(result.data.data));
      
    }
   , []);
   const formik = useFormik({
  
    initialValues: {
      languageLevel:"",
    },
    onSubmit: (values) => {
     values.jobSeeker = { id: jobSeekerLanguage.jobSeeker.id };
     values.id=jobSeekerLanguage.id;
     values.language={id:jobSeekerLanguage.language.id}
     console.log(values);
     jobSeekerLanguageService.updateJobSeekerLanguage(values);
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
      <Icon name="language" circular />
        <label   style={label}> <b>Dil :  {jobSeekerLanguage.language?.name}</b> </label>
        <br/>
        <label   style={label}> <b>Seviye : </b></label>
        <input
          id="languageLevel"
          name="languageLevel"
          type="text"
          style={text}
          onChange={formik.handleChange}
          value={formik.values.languageLevel}
          
        />
        <br/>
        <Button primary type="submit">Kaydet</Button>
      </form>
        </div>
    )
}
