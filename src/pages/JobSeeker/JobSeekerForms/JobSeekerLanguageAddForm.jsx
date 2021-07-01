import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { Button, Icon, Dropdown } from "semantic-ui-react";
import JobSeekerLanguageService from "../../../services/jobSeekerLanguageService";
import LanguageService from "../../../services/languageService";

export default function JobSeekerLanguageAddForm() {
  let jobSeekerLanguageService = new JobSeekerLanguageService();
  const [languages, setLanguages] = useState([]);

  useEffect(() => {
    let languageService = new LanguageService();

    languageService.getAll().then((result) => setLanguages(result.data.data));
  }, []);

  const formik = useFormik({
    initialValues: {
      languageId: "",
      languageLevel: "",
    },
    onSubmit: (values) => {
      values.jobSeeker = { id: 15 };
      values.language = { id: values.languageId };
      console.log(values);
      jobSeekerLanguageService.addJobSeekerLanguage(values);
    },
  });
  const languageOption = languages.map((language, index) => ({
    key: index,
    text: language.name,
    value: language.id,
  }));
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
        <Icon name="language" circular />
        <label style={label}>
          <b>Dil : </b>
        </label>
        <Dropdown
          clearable
          item
          style={dropdown}
          placeholder="Seçiniz"
          search
          selection
          onChange={(event, data) =>
            handleChangeSemantic(data.value, "languageId")
          }
          onBlur={formik.onBlur}
          id="cityId"
          value={formik.values.languageId}
          options={languageOption}
        />
        <br />
        <br />
        <Icon name="level up" circular />
        <label style={label}>
          <b>Seviye (1-5) : </b>
        </label>
        <input
          id="languageLevel"
          name="languageLevel"
          type="text"
          style={text}
          onChange={formik.handleChange}
          value={formik.values.languageLevel}
        />
        <br />
        <Button primary type="submit">
          Kaydet
        </Button>
      </form>
    </div>
  );
}
