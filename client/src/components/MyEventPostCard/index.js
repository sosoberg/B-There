import React from "react";
import './style.css'
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { MdClear } from "react-icons/md";
import axios from "axios";

function handleDelete(e){
    axios.delete(`http://localhost:3001/api/events/${e.currentTarget.value}`)
        .then(response => {
          console.log("Delete Success:",response);
        }).catch(error => {
          console.log('error',error)
        })
}


function MyEventPostCard(props) {

    return (
        <Card className='post-card'>
        <Card.Img variant="top" src={props.imgurl} />
        <Card.Body>
          <Card.Title style={{fontSize:'12px'}}>{props.userName}</Card.Title>
          <Card.Title><strong>{props.title}</strong></Card.Title>
          <Card.Text>
            {props.description}
          </Card.Text>
          <Button value={props.id} onClick={(e) => { handleDelete(e) }}>
              <MdClear/>
          </Button>
          {/* can add button or like tab here */}
        </Card.Body>
      </Card>
    );
};

export default MyEventPostCard;