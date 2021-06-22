import React from "react";
import { Button, Checkbox, Form,Icon } from "semantic-ui-react";

export default function login() {
  return (
    <div>
      <div>
        <Form>
          <Form.Field>
           <label> <Icon name="user"/>Email</label>
            
            <input placeholder="example@gmail.com" />
          </Form.Field>
          <Form.Field>
            <label> <Icon name="keyboard"/>Şifre</label>
            <input type="password" placeholder="password" />
          </Form.Field>
          
          <Button primary type="submit">Giriş Yap</Button>
        </Form>
      </div>
    </div>
  );
}
