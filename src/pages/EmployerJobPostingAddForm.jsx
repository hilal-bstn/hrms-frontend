import React, { useEffect, useState } from "react";
import CityService from "../services/cityService";
import JobPositionService from "../services/jobPositionService";
import TimeOfWorkService from "../services/timeOfWorkService";
import TypeOfWorkService from "../services/typeOfWorkService";
import EmployerJobPostingService from "../services/employerJobPostingService";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Button,
  Dropdown,
  Input,
  TextArea,
  Form,
  Grid,
} from "semantic-ui-react";

export default function EmployerJobPostingAddForm() {
  let employerJobPostingService = new EmployerJobPostingService();

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
      jobDescription: "",
      minSalary: "",
      maxSalary: "",
      openPositionCount: "",
      applicationDeadline: "",
      cityId: "",
      typeOfWorkId: "",
      timeOfWorkId: "",
      jobPositionId: "",
    },

    onSubmit: (values) => {
      values.employer = { id: 2 };
      values.city = { id: values.cityId };
      values.jobPosition = { id: values.jobPositionId };
      values.typeOfWork = { id: values.typeOfWorkId };
      values.timeOfWork = { id: values.timeOfWorkId };
      console.log(values);
      employerJobPostingService.addEmployerJobPosting(values);
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
    padding: "10px 300px",
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
      <Form onSubmit={formik.handleSubmit}>
        <Form.Field>
          <b>  Şehir : </b>
          <Dropdown
            clearable
            item
            style={dropdown}
            placeholder="Seçiniz"
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
          <b>İş Pozisyonu : </b>
          <Dropdown
            clearable
            item
            style={dropdown}
            placeholder="Seçiniz"
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
          <b>Çalışma Tipi : </b>
          <Dropdown
            clearable
            item
            style={dropdown}
            placeholder="Seçiniz"
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
          <b>Çalışma Zamanı</b>
          
          <Dropdown
            clearable
            item
            style={dropdown}
            placeholder="Seçiniz"
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
        <br/>

        <Form.Field>
          <Grid stackable>
            <Grid.Column width={8}>
              <b>Minimum Maaş</b>
              <Input
                style={{ width: "100%" }}
                type="number"
                placeholder="Minimum"
                value={formik.values.minSalary}
                name="minSalary"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              ></Input>
            </Grid.Column>
            <Grid.Column width={8}>
              <b>Maximum Maaş</b>
              <Input
                style={{ width: "100%" }}
                type="number"
                placeholder="Maximum"
                value={formik.values.maxSalary}
                name="maxSalary"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              ></Input>
            </Grid.Column>
          </Grid>
        </Form.Field>
        <br/>

        <Form.Field>
          <Grid stackable>
            <Grid.Column width={8}>
              <b> Pozisyon Açığı:</b>
              <Input
                style={{ width: "100%" }}
                placeholder="Pozisyon açığı"
                id="openPositionCount"
                name="openPositionCount"
                onChange={formik.handleChange}
                value={formik.values.openPositionCount}
                onBlur={formik.handleBlur}
                type="number"
              />
            </Grid.Column>
            <Grid.Column width={8}>
              <b>Son Başvuru Tarihi</b>
              <Input
                style={{ width: "100%" }}
                type="date"
                onChange={(event, data) =>
                  handleChangeSemantic(data.value, "applicationDeadline")
                }
                value={formik.values.applicationDeadline}
                onBlur={formik.handleBlur}
                name="applicationDeadline"
              />
            </Grid.Column>
          </Grid>
        </Form.Field>
        <br/>

        <Form.Field>
          <b>Açıklama</b>
          <TextArea
            style={{ minHeight: 100 }}
            placeholder="Çalışmayı çok seven.."
            value={formik.values.jobDescription}
            name="jobDescription"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </Form.Field>
        <br/>

        <Button
          content="Ekle"
          color="blue"
          type="submit"
          style={{ marginLeft: "20px" }}
        />
      </Form>
    </div>
  );
}
