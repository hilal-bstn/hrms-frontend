import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import JobSeekerCoverLetterService from "../services/jobSeekerCoverLetterService";
import { Icon, TextArea ,Button} from "semantic-ui-react";

export default function JobSeekerCoverLetterUpdateForm() {
  let { id } = useParams();
  const [jobSeekerCoverLetter, setJobSeekerCoverLetter] = useState({});
  let jobSeekerCoverLetterService = new JobSeekerCoverLetterService();
  useEffect(() => {
    jobSeekerCoverLetterService
      .getByJobSeekerCoverLetterId(id)
      .then((result) => setJobSeekerCoverLetter(result.data.data));
  }, []);
  const formik = useFormik({
    initialValues: {
      coverLetter: jobSeekerCoverLetter.coverLetter,
    },
    onSubmit: (values) => {
      values.jobSeeker = { id: jobSeekerCoverLetter.jobSeeker.id };
      values.id = jobSeekerCoverLetter.id;
      console.log(values);
      jobSeekerCoverLetterService.updateJobSeekerCoverLetter(values);
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
          value={formik.values.coverLetter}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <br />
        <Button primary type="submit">
          Kaydet
        </Button>
      </form>
    </div>
  );
}
