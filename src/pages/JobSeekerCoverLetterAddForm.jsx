import React from "react";
import { useFormik } from "formik";
import JobSeekerCoverLetterService from "../services/jobSeekerCoverLetterService";

export default function JobSeekerCoverLetterAddForm() {
  let jobSeekerCoverLetterService = new JobSeekerCoverLetterService();
  const formik = useFormik({
    initialValues: {
      coverLetter: "",
    },
    onSubmit: (values) => {
      values.jobSeeker = { id: 3 };
      jobSeekerCoverLetterService.addjobSeekerCoverLetter(values);
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
        <label style={label}>Önyazı :  </label>
        <input
          id="coverletter"
          name="coverletter"
          type="text"
          rows="5"
          cols="30"
          style={selectandtext}
          onChange={formik.handleChange}
          value={formik.values.coverLetter}
        />
        <br/>
        <button type="submit">Kaydet</button>
      </form>
    </div>
  );
}
