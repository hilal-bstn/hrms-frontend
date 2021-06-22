import React from 'react'
import { useFormik } from "formik";
import { Button, Icon } from 'semantic-ui-react'
import JobSeekerLanguageService from "../services/jobSeekerLanguageService";

export default function JobSeekerLanguageAddForm() {
 let jobSeekerLanguageService=new JobSeekerLanguageService();
    const formik = useFormik({
      initialValues: {
        name: "",
        languageLevel:""
      },
      onSubmit: (values) => {
        values.jobSeeker = { id: 15};
        values.language={ name:values.name}
        console.log(values)
        jobSeekerLanguageService.addJobSeekerLanguage(values)
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
        <label   style={label}> <b>Dil :   </b></label>
        <input
          id="name"
          name="name"
          type="text"
          style={text}
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        <br/>
        <Icon name="level up" circular />
        <label style={label}><b>Seviye (1-5) :  </b></label>
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
