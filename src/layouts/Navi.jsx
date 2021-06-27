import React from "react";
import { Container, Button, Icon, Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default function Navi() {
  return (
    <div>
      <Menu  style={{ borderStyle: "none" ,marginBottom:"30px"}}>
        <Container>
          <img src="../logo.png" />

          <Menu.Menu position="right">
            <Button
              basic
              color="black"
              position="right"
              style={{ margin: "15px" }}
            >
              Kayıt ol
            </Button>
            <Link to={`/login`}>
            <Button
              basic
              color="black"
              position="right"
              style={{ margin: "15px" }}
            >
              <Icon name="sign in" />
              Giriş Yap
            </Button>
            </Link>
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
