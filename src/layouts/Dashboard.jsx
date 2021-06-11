import React from 'react'
import { Container, Button, Icon,Menu } from "semantic-ui-react";

export default function Dashboard() {
    return (
        <div>
            <img src="sayfa2.png" style={{margin: "5px" ,float: "left" , zIndex:"-1"}}/>
            <Button
              basic
              color="black"
              position="right"
              style={{margin: "155px",float: "left",fontWeight:"bold",fontSize:"150%"}}
            >
                İş İlanlarını İncele
                <Icon name='angle double right' />
            </Button>
        </div>
    )
}