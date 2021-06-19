import React from "react";
import { useFormik } from "formik";
import JobSeekerContactService from "../services/jobSeekerContactService";

export default function JobSeekerContactAddForm() {
  let jobSeekerContactService = new JobSeekerContactService();
  const formik = useFormik({
    initialValues: {
      github: "",
      linkedin: "",
    },
    onSubmit: (values) => {
     // values.jobSeeker = { id: 3 };
      jobSeekerContactService.addJobSeekerContact(values);
    },
  });
  const selectandtext = {
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
        <label   style={label}>Github :   </label>
        <input
          id="github"
          name="github"
          type="url"
          style={selectandtext}
          onChange={formik.handleChange}
          value={formik.values.github}
        />
        <br/>
        <label style={label}>Linkedin :  </label>
        <input
          id="linkedin"
          name="linkedin"
          type="url"
          style={selectandtext}
          onChange={formik.handleChange}
          value={formik.values.linkedin}
        />
        <br/>
        <button type="submit">Kaydet</button>
      </form>
    </div>
  );
}
