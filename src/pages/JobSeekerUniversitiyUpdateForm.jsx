import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Icon, Dropdown } from "semantic-ui-react";
import JobSeekerUniversityService from "../services/jobSeekerUniversityService";
import UniversityDepartmentService from "../services/universityDepartmentService";
import UniversityService from "../services/universityService";

export default function JobSeekerUniversitiyUpdateForm() {
  let { id } = useParams();
  let jobSeekerUniversityService = new JobSeekerUniversityService();
  const [jobSeekerUniversity, setJobSeekerUniversity] = useState([]);
  const [universities, setUniversities] = useState([]);
  const [universityDepartments, setUniversityDepartments] = useState([]);
  useEffect(() => {
    let universityService = new UniversityService();
    let universityDepartmentService = new UniversityDepartmentService();
    universityService
      .getAll()
      .then((result) => setUniversities(result.data.data));
    universityDepartmentService
      .getAll()
      .then((result) => setUniversityDepartments(result.data.data));
    jobSeekerUniversityService
      .getById(id)
      .then((result) => setJobSeekerUniversity(result.data.data));
  }, []);

  const formik = useFormik({
    initialValues: {
      universityId: "",
      universityDepartmentId: "",
      entranceYear: "",
      graduationYear: "",
    },
    onSubmit: (values) => {
      values.jobSeeker = { id: jobSeekerUniversity.jobSeeker.id };
      values.university = { id: values.universityId };
      values.universityDepartment = { id: values.universityDepartmentId };
      values.id = jobSeekerUniversity.id;
      console.log(values);
      jobSeekerUniversityService.updateJobSeekerUniversity(values);
    },
  });
  const universityOption = universities.map((university, index) => ({
    key: index,
    text: university.name,
    value: university.id,
  }));
  const universityDepartmentOption = universityDepartments.map(
    (universityDepartment, index) => ({
      key: index,
      text: universityDepartment.name,
      value: universityDepartment.id,
    })
  );
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
  const label = {
    width: "30%",
    fontSize: "20px",
  };
  const dropdown = {
    width: "100%",
    padding: "10px 300px",
    margin: "0px 0",
    display: "inline",
    border: "1px solid #ccc",
    borderRadius: "8px",
    boxSizing: "border-box",
    fontSize: "15px",
    marginBottom: "50px",
    marginLeft: "15px",
  };
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <Icon name="university" circular />
        <label style={label}>
          <b>Üniversite : </b>
        </label>
        <Dropdown
          clearable
          item
          style={dropdown}
          placeholder="Seçiniz"
          search
          selection
          onChange={(event, data) =>
            handleChangeSemantic(data.value, "universityId")
          }
          onBlur={formik.onBlur}
          id="universityId"
          value={formik.values.universityId}
          options={universityOption}
        />
        <br />
        <br />
        <Icon name="book" circular />
        <label style={label}>
          <b>Bölüm : </b>
        </label>
        <Dropdown
          clearable
          item
          style={dropdown}
          placeholder="Seçiniz"
          search
          selection
          onChange={(event, data) =>
            handleChangeSemantic(data.value, "universityDepartmentId")
          }
          onBlur={formik.onBlur}
          id="universityDepartmentId"
          value={formik.values.universityDepartmentId}
          options={universityDepartmentOption}
        />
        <br />
        <br />
        <label style={label}>
          <b>Başlangıç yılı : </b>
        </label>
        <input
          id="entranceYear"
          name="entranceYear"
          type="text"
          style={text}
          onChange={formik.handleChange}
          value={formik.values.entranceYear}
        />
        <br />
        <br />
        <Icon name="graduation cap" circular />
        <label style={label}>
          <b>Bitiş yılı(Devam ediyorsanız boş bırakınız.) : </b>
        </label>
        <input
          id="graduationYear"
          name="graduationYear"
          type="text"
          style={text}
          onChange={formik.handleChange}
          value={formik.values.graduationYear}
        />
        <br />
        <Button primary type="submit">
          Kaydet
        </Button>
      </form>
    </div>
  );
}
