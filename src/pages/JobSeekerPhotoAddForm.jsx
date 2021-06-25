import React from "react";
import { Formik, Form } from "formik";
import { useFormik } from "formik";
import { FormField, Button } from "semantic-ui-react";
import JobSeekerPhotoService from "../services/jobSeekerPhotoService";
export default function JobSeekerPhotoAddForm() {
  return (
    //https://stackoverflow.com/questions/56149756/reactjs-how-to-handle-image-file-upload-with-formik
    //https://www.youtube.com/watch?v=EUIRvQbkf0Y
    <div className="upload">
      <Formik
        initialValues={{ file: "" }}
        onSubmit={(values) => {
          let jobSeekerPhotoService = new JobSeekerPhotoService();
          values.id="15"
          console.log(values)
          jobSeekerPhotoService.addJobSeekerPhoto(values.id,values.file)
        }}
      >
        {(formProps) => (
          <Form>
            <input
              type="file"
              name="file"
              onChange={(event) =>
              formProps.setFieldValue("file", event.target.files[0])
              }
            />
            <Button type="submit">Kaydet</Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
