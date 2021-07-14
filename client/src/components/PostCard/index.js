import React from "react";
import './style.css'
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { MdThumbUp } from "react-icons/md";
import axios from 'axios';

function handlelike(e){
  axios.get(`http://localhost:3001/api/posts/${e.currentTarget.value}`)
      .then(response => {
        const currentLikes = response.data.likes
        axios.put(`http://localhost:3001/api/posts/${response.data._id}`,{
          likes: currentLikes + 1
        },{withCredentials: true})
      }).catch(error => {
        console.log('likes error:', error)
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
          <Button value={props.id} onClick={(e) => { handlelike(e) }}>
          <MdThumbUp/>
          </Button>
          <Card.Text>
            {props.likes}
          </Card.Text>
          {/* can add button or like tab here */}
        </Card.Body>
      </Card>
    );
};

export default PostCard;