import React, { Component } from "react";

import axios from "axios";
// import posts from '../postdata';
import MyPostCard from "../components/MyPostCard";

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
      posts: []
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
        axios.get(`http://localhost:3001/api/posts/photos/${response.data.user._id}`)
        .then(response => {
          console.log(response.data);
          this.setState({ posts: response.data })
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
          {this.state.posts.map((post) => {
              return <MyPostCard title={post.title} imgurl={post.Image64} userName={this.state.username} description={post.description} id={post._id}/>
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
