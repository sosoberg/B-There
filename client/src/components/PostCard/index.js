import React from "react";
import './style.css'
import {Card} from 'react-bootstrap';

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
          {/* can add button or like tab here */}
        </Card.Body>
      </Card>
    );
};

export default PostCard;