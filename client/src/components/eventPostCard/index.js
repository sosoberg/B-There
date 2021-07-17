import React from "react";
import './style.css'
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { MdThumbUp } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";

function EventCards(props) {

    return (
        <Card className='post-card'>
        <Card.Img variant="top" src={props.imgurl} />
        <Card.Body>
          <Card.Title style={{fontSize:'12px'}}>{props.userName}</Card.Title>
          <Card.Title><strong>{props.title}</strong></Card.Title>
          <Card.Text>
            {props.description}
          </Card.Text>
          <Card.Text>
          <MdFavoriteBorder/>{props.likes}
          </Card.Text>
          <Button value={props.id} onClick={(e) => { props.action(e.currentTarget.value) }}>
          <MdThumbUp/>
          </Button>
          {/* can add button or like tab here */}
        </Card.Body>
      </Card>
    );
};

export default EventCards;