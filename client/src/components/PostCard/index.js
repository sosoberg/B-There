import React from "react";
import './style.css'

function PostCard(props) {

    return (
        <div>
            <h2>{props.username}</h2>
            <img src={props.image} alt="projectImg"/>
            <p>{props.description}</p>
        </div>
    );
};

export default PostCard;