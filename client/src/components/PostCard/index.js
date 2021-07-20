import React from "react";
import './style.css'
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { MdThumbUp } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";

function PostCard(props) {
    return (
        <Card className='post-card'>

        <Card.Img className='cardImage' variant="top" src={props.imgurl} />
        <Card.Title className='cardUserName' style={{fontSize:'30px', fontWeight:'bold'}}>{props.userName}</Card.Title>
        <Card.Body>
          
          <Card.Title><strong className='cardTitle'>{props.title}</strong></Card.Title>
          <Card.Text className='cardDescription'>
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

export default PostCard;