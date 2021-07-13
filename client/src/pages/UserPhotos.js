import React, { Component } from "react";

import axios from "axios";
import posts from '../postdata';
import PostCard from "../components/PostCard";

import './style.css'

export default class UserPhotos extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      user_ID:"",
      fileInputState: "",
      previewSource: "",
      selectedFile: "",
    }
  }

  getLoginStatus() {
    axios
      .get("http://localhost:3001/api/users/login", { withCredentials: true })
      .then(response => {
        this.setState({
          user_ID: response.data.user._id,
          username: response.data.user.username,
        })
      })
      .catch(error => {
        console.log("check login error", error);
      });
  }

  componentDidMount() {
    this.getLoginStatus();
  }

  render() {
    if (this.props.loggedInStatus === "LOGGED_IN") {

      return (
        <div>
          <div className='profileCard'>
          {posts.map((post) => {
              return <PostCard imgurl={post.imgurl} userName={post.userName} description={post.description} />
            })}
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <h1>*Please Login</h1>
        </div>
      )
    }
  } 
}
