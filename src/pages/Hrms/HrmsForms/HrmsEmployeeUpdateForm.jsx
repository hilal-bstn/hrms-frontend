import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "semantic-ui-react";
import { useFormik } from "formik";
import HrmsEmployeeService from "../../../services/hrmsEmployeeService";

export default function HrmsEmployeeUpdateForm() {
  let { id } = useParams();
  const [hrmsEmployee, setHmrsEmployee] = useState({});
  let hrmsEmployeeService = new HrmsEmployeeService();
  useEffect(() => {
    hrmsEmployeeService
      .getById(id)
      .then((result) => setHmrsEmployee(result.data.data));
  }, []);
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
    },
    onSubmit: (values) => {
      values.user = { id: hrmsEmployee.user.id };
      values.id = hrmsEmployee.id;
      console.log(values);
      hrmsEmployeeService.updateHrmsEmployee(values);
    },
  });
  
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <label className="label">
          <b>İsim : </b>
        </label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          className="text"
          onChange={formik.handleChange}
          value={formik.values.firstName}
        />
        <br />
        <label className="label">
          <b>Soyisim : </b>
        </label>
        <input
          id="lastName"
          name="lastName"
          type="text"
          className="text"
          onChange={formik.handleChange}
          value={formik.values.lastName}
        />
        <br />
        <Button primary type="submit">
          Kaydet
        </Button>
      </form>
    </div>
  );
}
