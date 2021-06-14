import React from "react";
import { Input, Button, Icon, Form } from "semantic-ui-react";

export default function JobSeekerContactAddForm() {
  return (
    <div>
      <Form>
        <Input
          size="huge"
          fluid
          icon="github"
          iconPosition="left"
          placeholder="Github "
        />
        <br />
        <br />
        <Input
          size="huge"
          fluid
          icon="linkedin"
          iconPosition="left"
          placeholder="Linkedin "
        />
        <br />
        <br />
        <div style={{ marginLeft: "15px" }}>
          <Button basic color="black">
            Kaydet
          </Button>
        </div>
      </Form>
    </div>
  );
}
