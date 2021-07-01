import React from "react";
import { Formik, Form } from "formik";
import { Button } from "semantic-ui-react";
import JobSeekerPhotoService from "../../../services/jobSeekerPhotoService";
export default function JobSeekerPhotoAddForm() {
  return (
    //https://stackoverflow.com/questions/56149756/reactjs-how-to-handle-image-file-upload-with-formik
    //https://www.youtube.com/watch?v=EUIRvQbkf0Y
    //https://www.youtube.com/watch?v=XeiOnkEI7XI
    <div className="upload">
      <Formik
        initialValues={{ file: "" }}
        onSubmit={(values) => {
          let jobSeekerPhotoService = new JobSeekerPhotoService();
          let f=new FormData();//dosya gönderimi için gerekli.
          f.append('file',values.file)
          values.id="15"
          jobSeekerPhotoService.addJobSeekerPhoto(values.id,f)
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
