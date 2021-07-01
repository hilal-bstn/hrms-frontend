import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "semantic-ui-react";
import EmployerService from "../../../services/employerService";
import EmployerUpdateConfirmationService from "../../../services/employerUpdateConfirmationService";

export default function EmployerUpdateForm() {
  let { id } = useParams();
  const [employer, setemployer] = useState({});
  let employerService = new EmployerService();
  let employerUpdateConfirmationService =
    new EmployerUpdateConfirmationService();

  useEffect(() => {
    employerService.getById(id).then((result) => setemployer(result.data.data));
  }, []);
  const formik = useFormik({
    initialValues: {
      companyName: "",
      phone: "",
      website: "",
    },
    onSubmit: (values) => {
      values.company = { id: employer.company.id };
      employerUpdateConfirmationService.add(values);
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
      <form onSubmit={formik.handleSubmit}>
        <label style={label}>
          <b>Şirket İsmi : </b>
        </label>
        <input
          id="companyName"
          name="companyName"
          type="text"
          style={text}
          onChange={formik.handleChange}
          value={formik.values.companyName}
        />
        <br />
        <label style={label}>
          <b>Telefon : </b>
        </label>
        <input
          id="phone"
          name="phone"
          type="text"
          style={text}
          onChange={formik.handleChange}
          value={formik.values.phone}
        />
        <br />
        <label style={label}>
          <b>Website : </b>
        </label>
        <input
          id="website"
          name="website"
          type="text"
          style={text}
          onChange={formik.handleChange}
          value={formik.values.website}
        />
        <br />
        <Button primary type="submit">
          Kaydet
        </Button>
      </form>
    </div>
  );
}
