import React, { Component } from "react";

import axios from "axios";

import './style.css'

export default class Profile extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      user_ID:"",
      fileInputState: "",
      titleInputState:"",
      descriptionState:"",
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

      const handleFileInputChange = (e) => {
        const file = e.target.files[0]
        previewFile(file)
      }

      const handleTitleInputChange = (e) => {
        this.setState({
          titleInputState: e.target.value
        })
      }

      const handleDesInputChange = (e) =>{
        this.setState({
          descriptionState: e.target.value
        })
      }

      const previewFile = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file)
        reader.onload = () => {
          this.setState({
            previewSource: reader.result
          })
          // console.log(this.state.previewSource)
        }
      }

      const handleSubmitFile = (e) => {
        e.preventDefault();
        if (!this.state.previewSource) return;
        uploadImage(this.state.previewSource);
      }

      const uploadImage = async (base64EncodedImage) => {
        // console.log(base64EncodedImage)
        // console.log(JSON.stringify({ Image64: base64EncodedImage }))
        try {
          await axios.post('http://localhost:3001/api/posts',
            {
              userId: this.state.user_ID,
              userName: this.state.username,
              title: this.state.titleInputState,
              description: this.state.descriptionState,
              Image64: base64EncodedImage,
            },
            { withCredentials: true })
            .then(response => {
              console.log("upload image")
            })
        } catch (error) {
          console.log("error", error)
        }
      }

      return (
        <div>
          <div className='imageSubmit'>
            <h1 className='stateUserName'>Welcome: {this.state.username}</h1>
            <h2>Status: {this.props.loggedInStatus}</h2>

            <form className='pictureSubmitForm' onSubmit={handleSubmitFile}>
              <input type="file" name="image" value={this.state.fileInputState} onChange={handleFileInputChange} />
              <label htmlFor="password">Title</label>
              <input type="text" name="title" value={this.state.titleInputState} onChange={handleTitleInputChange}/>
              <label htmlFor="password">Description</label>
              <input type="text" name="description" value={this.state.descriptionState} onChange={handleDesInputChange}/>
              <button type="submit" className="btn btn-primary">submit</button>
            </form>
            <br />
            {this.state.previewSource && (
              <img src={this.state.previewSource} alt="chose" style={{ height: '300px' }} />
            )}
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
