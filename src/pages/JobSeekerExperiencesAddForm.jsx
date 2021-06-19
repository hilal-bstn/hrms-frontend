import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import JobSeekerExperienceService from "../services/jobSeekerExperienceService";
import JobPositionService from "../services/jobPositionService";
import { Button, Dropdown, Label } from "semantic-ui-react";

export default function JobSeekerExperiencesAddForm() {
  let jobSeekerExperienceService = new JobSeekerExperienceService();
  const [jobPositions, setJobPositions] = useState([]);
  const jobPositionOption = jobPositions.map((jobPosition, index) => ({
    key: index,
    text: jobPosition.title,
    value: jobPosition.id,
    
  }));
  useEffect(() => {
    let jobPositionService = new JobPositionService();
    jobPositionService
      .getJobPositions()
      .then((result) => setJobPositions(result.data.data));
  }, []);

  const formik = useFormik({
    initialValues: {
      jobPositionId: "",
      companyName:"",
      employmentStartYear:"",
      terminationYear:""
    },
    onSubmit: (values) => {
      values.jobSeeker = { id: 3 };
      values.jobPosition={id:values.jobPositionId};
      jobSeekerExperienceService.addJobSeekerExperience(values);
    },
  });

  const handleChangeSemantic = (value, fieldName) => {
    formik.setFieldValue(fieldName, value);
  };
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
  const dropdown = {
    width: "100%",
    padding: "10px 110px",
    margin: "0px 0",
    display: "inline",
    border: "1px solid #ccc",
    borderRadius: "8px",
    boxSizing: "border-box",
    fontSize: "15px",
    marginBottom: "50px",
    marginLeft:"15px"
  };
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
      <b> Şirket İsmi: </b>
        <input
          id="companyName"
          name="companyName"
          type="text"
          style={text}
          onChange={formik.handleChange}
          value={formik.values.companyName}
        />
        <br/>
        <b>Pozisyon : </b>
        <Dropdown  
          clearable
          item
          placeholder="Seçiniz"
          search
          selection
          style={dropdown}
          onChange={(event, data) =>
            handleChangeSemantic(data.value, "jobPositionId")
          }
          onBlur={formik.onBlur}
          id="jobPositionId"
          value={formik.values.jobPositionId}
          options={jobPositionOption}
        /><br/>
        <br/>
       
        <b>İşe Başlangıç Yılı: </b>
        <input
          id="employmentStartYear"
          name="employmentStartYear"
          type="text"
          style={text}
          onChange={formik.handleChange}
          value={formik.values.employmentStartYear}
        />
        <br/>
        <b>İşten Ayrılma Yılı: </b>
        <input
          id="terminationYear"
          name="terminationYear"
          type="text"
          style={text}
          onChange={formik.handleChange}
          value={formik.values.terminationYear}
        />
        <br/>
         <Button primary type="submit">Kaydet</Button>
      </form>
    </div>
  );
}
