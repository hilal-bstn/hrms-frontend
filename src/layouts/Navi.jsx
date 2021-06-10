import React from "react";
import { Container, Button, Icon, Menu } from "semantic-ui-react";

export default function Navi() {
  return (
    <div>
      <Menu style={{ borderStyle: "none" }}>
        <Container>
          <img src="logo.png" />

          <Menu.Menu position="right">
            <Button
              basic
              color="black"
              position="right"
              style={{ margin: "15px" }}
            >
              Kayıt ol
            </Button>

            <Button
              basic
              color="black"
              position="right"
              style={{ margin: "15px" }}
            >
              <Icon name="sign in" />
              Giriş Yap
            </Button>
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
