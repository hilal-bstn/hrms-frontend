import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { Button, Icon, Dropdown } from "semantic-ui-react";
import TechnologyService from "../services/technologyService";
import JobSeekerTechnologyService from "../services/jobSeekerTechnologyService";

export default function JobSeekerTechnologyAddForm() {
  let jobSeekerTechnologyService = new JobSeekerTechnologyService();
  const [technologies, setTechnologies] = useState([]);

  useEffect(() => {
    let technologyService = new TechnologyService();

    technologyService
      .getAll()
      .then((result) => setTechnologies(result.data.data));
  }, []);

  const formik = useFormik({
    initialValues: {
      technologyId: "",
    },
    onSubmit: (values) => {
      values.jobSeeker = { id: 15 };
      values.technology = { id: values.technologyId };
      console.log(values);
      jobSeekerTechnologyService.addJobSeekerTechnology(values);
    },
  });
  const technologyOption = technologies.map((technology, index) => ({
    key: index,
    text: technology.name,
    value: technology.id,
  }));
  const handleChangeSemantic = (value, fieldName) => {
    formik.setFieldValue(fieldName, value);
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
        <Icon name="computer" circular />
        <label style={label}>
          <b>Teknoloji/Programlama Dili : </b>
        </label>
        <Dropdown
          clearable
          item
          style={dropdown}
          placeholder="Seçiniz"
          search
          selection
          onChange={(event, data) =>
            handleChangeSemantic(data.value, "technologyId")
          }
          onBlur={formik.onBlur}
          id="technologyId"
          value={formik.values.technologyId}
          options={technologyOption}
        />
        <br />
        <br />
        <Button primary type="submit">
          Kaydet
        </Button>
      </form>
    </div>
  );
}
