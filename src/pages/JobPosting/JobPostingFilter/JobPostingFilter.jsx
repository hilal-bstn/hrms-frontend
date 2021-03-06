import React, { useEffect, useState } from 'react'
import CityService from "../../../services/cityService";
import JobPositionService from "../../../services/jobPositionService";
import TimeOfWorkService from "../../../services/timeOfWorkService";
import TypeOfWorkService from "../../../services/typeOfWorkService";
import { useFormik } from "formik";
import {
  Button,
  Dropdown,
  Form,
} from "semantic-ui-react";
import { Link } from 'react-router-dom';
export default function JobPostingFilter() {
    const [cities, setCities] = useState([]);
  const [timesOfWork, setTimesOfWork] = useState([]);
  const [typesOfWork, setTypesOfWork] = useState([]);
  const [jobPositions, setJobPositions] = useState([]);

  useEffect(() => {
    let cityService = new CityService();
    let jobPositionService = new JobPositionService();
    let timeOfworkService = new TimeOfWorkService();
    let typeOfWorkService = new TypeOfWorkService();
    cityService.getCities().then((result) => setCities(result.data.data));
    jobPositionService
      .getJobPositions()
      .then((result) => setJobPositions(result.data.data));
    timeOfworkService
      .getTimesOfWork()
      .then((result) => setTimesOfWork(result.data.data));
    typeOfWorkService
      .getTypesOfWork()
      .then((result) => setTypesOfWork(result.data.data));
  }, []);

  const formik = useFormik({
    initialValues: {
      cityId: "0",
      typeOfWorkId: "0",
      timeOfWorkId: "0",
      jobPositionId: "0",
    },

    onSubmit: (values) => {
      console.log(values)
    },
  });

  const timesOWorkOption = timesOfWork.map((timeOfWork, index) => ({
    key: index,
    text: timeOfWork.name,
    value: timeOfWork.id,
  }));
  const typeOfWorkOption = typesOfWork.map((typeOfWork, index) => ({
    key: index,
    text: typeOfWork.name,
    value: typeOfWork.id,
  }));
  const cityOption = cities.map((city, index) => ({
    key: index,
    text: city.name,
    value: city.id,
  }));
  const jobPositionOption = jobPositions.map((jobPosition, index) => ({
    key: index,
    text: jobPosition.title,
    value: jobPosition.id,
  }));

  const handleChangeSemantic = (value, fieldName) => {
    formik.setFieldValue(fieldName, value);
  };
  const dropdown = {
    width: "100%",
    padding: "10px 25px",
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
            <Form onSubmit={formik.handleSubmit} >
        <Form.Field>
          <b>  ??ehir : </b>
          <Dropdown
            clearable
            item
            style={dropdown}
            placeholder="Se??iniz"
            search
            selection
            onChange={(event, data) =>
              handleChangeSemantic(data.value, "cityId")
            }
            onBlur={formik.onBlur}
            id="cityId"
            value={formik.values.cityId}
            options={cityOption}
          />
          
        </Form.Field>
<br/>
        <Form.Field>
          <b>???? Pozisyonu : </b>
          <Dropdown
            clearable
            item
            style={dropdown}
            placeholder="Se??iniz"
            search
            selection
            onChange={(event, data) =>
              handleChangeSemantic(data.value, "jobPositionId")
            }
            onBlur={formik.onBlur}
            id="jobPositionId"
            value={formik.values.jobPositionId}
            options={jobPositionOption}
          />
        </Form.Field>
        <br/>

        <Form.Field>
          <b>??al????ma Tipi : </b>
          <Dropdown
            clearable
            item
            style={dropdown}
            placeholder="Se??iniz"
            search
            selection
            onChange={(event, data) =>
              handleChangeSemantic(data.value, "typeOfWorkId")
            }
            onBlur={formik.onBlur}
            id="typeOfWorkId"
            value={formik.values.typeOfWorkId}
            options={typeOfWorkOption}
          />
        </Form.Field>
        <br/>

        <Form.Field>
          <b>??al????ma Zaman??</b>
          
          <Dropdown
            clearable
            item
            style={dropdown}
            placeholder="Se??iniz"
            search
            selection
            onChange={(event, data) =>
              handleChangeSemantic(data.value, "timeOfWorkId")
            }
            onBlur={formik.onBlur}
            id="timeOfWorkId"
            value={formik.values.timeOfWorkId}
            options={timesOWorkOption}
          />
        </Form.Field>
        <Link to={`/employerJobPostingList/${formik.values.cityId}/${formik.values.jobPositionId}/${formik.values.timeOfWorkId}/${formik.values.typeOfWorkId}`}>

        <Button
          content="Filtrele"
          color="blue"
          type="submit"
          style={{ marginLeft: "20px" }}
        /></Link>
        </Form>

        </div>
    )
}
