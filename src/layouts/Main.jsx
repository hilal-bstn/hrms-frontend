import React from 'react'
import { Link } from "react-router-dom";
import {Button, Icon } from "semantic-ui-react";


export default function Main() {
    return (
        <div>
            <img src="sayfa2.png" style={{margin: "5px" ,float: "left" , zIndex:"-1"}}/>
            <Link to="/employerJobPostingList">
            <Button
              basic
              color="black"
              position="right"
              style={{margin: "155px",float: "left",fontWeight:"bold",fontSize:"150%"}}
            >
                İş İlanlarını İncele
                <Icon name='angle double right' />
            </Button>
            </Link>
        </div>
    )
}