import React from "react";
import { useFormik } from "formik";
import JobSeekerCoverLetterService from "../services/jobSeekerCoverLetterService";
import { Icon, TextArea ,Button} from "semantic-ui-react";

export default function JobSeekerCoverLetterAddForm() {
  let jobSeekerCoverLetterService = new JobSeekerCoverLetterService();
  const formik = useFormik({
    initialValues: {
      coverLetter: "",
    },
    onSubmit: (values) => {
      values.jobSeeker = { id: 15 };
      jobSeekerCoverLetterService.addjobSeekerCoverLetter(values);
    },
  });
  const textarea = {
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
      <Icon name="write" circular />

      <label style={label}>
        <b>Önyazı : </b>
      </label>

      <form onSubmit={formik.handleSubmit}>
        <TextArea
          id="coverLetter"
          name="coverLetter"
          type="textarea"
          rows="7"
          cols="100"
          placeholder="Çalışmayı çok severim..."
          value={formik.values.coverLetter}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <br />
        <Button primary type="submit">Kaydet</Button>
      </form>
    </div>
  );
}
