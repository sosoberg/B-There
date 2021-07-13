import React from "react";
import './style.css'
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import axios from "axios"

function handleDelete(e){
    console.log(e.target.value)
    axios.delete(`http://localhost:3001/api/posts/${e.target.value}`)
        .then(response => {
          console.log("Delete Success:",response);
        })
}


function PostCard(props) {

    return (
        <Card className='post-card'>
        <Card.Img variant="top" src={props.imgurl} />
        <Card.Body>
          <Card.Title style={{fontSize:'12px'}}>{props.userName}</Card.Title>
          <Card.Title><strong>{props.title}</strong></Card.Title>
          <Card.Text>
            {props.description}
          </Card.Text>
          <Button value={props.id} onClick={(e) => { handleDelete(e) }}/>
          {/* can add button or like tab here */}
        </Card.Body>
      </Card>
    );
};

export default PostCard;