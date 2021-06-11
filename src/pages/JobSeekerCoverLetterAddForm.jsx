import React from "react";
import { Form, TextArea, Button } from "semantic-ui-react";

export default function JobSeekerCoverLetterAddForm() {
  return (
    <div>
      <Form>
        <TextArea placeholder="Çalışmayı çok severim.." style={{ minHeight: 100 }} />
        <br/>
            <br/>
        <div>
          <Button basic color="black">
            Kaydet
          </Button>
        </div>
      </Form>
    </div>
  );
}
