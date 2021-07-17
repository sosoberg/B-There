import React , {Component} from "react";
import PostCard from "../components/PostCard";

import EventCards from "../components/eventPostCard";
// import posts from '../postdata';

import axios from 'axios';
import './style.css';

import EventModal from "../components/EventModal";

export default class Home extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props){
    super(props);
    this.state = {
      posts: [],
      events: []
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleClickEvent = this.handleClickEvent.bind(this);
  }

  findByKey(key, value) {
    return (item, i) => item[key] === value
  }

  handleClick(value){
    let findParams = this.findByKey('_id', value)
    let index = this.state.posts.findIndex(findParams)
    axios.get(`http://localhost:3001/api/posts/${value}`)
      .then(response => {
        const currentLikes = response.data.likes
        axios.put(`http://localhost:3001/api/posts/${response.data._id}`,{
          likes: currentLikes + 1
        },{withCredentials: true})
        
        let post = Object.assign({}, this.state.posts[index], {likes: currentLikes + 1});
        let posts = this.state.posts
        posts[index] = post;
        this.setState({posts: posts});
      })
      .catch(error => {
        console.log('likes error:', error)
      })
  }

  handleClickEvent(value){
    let findParams = this.findByKey('_id', value)
    let index = this.state.events.findIndex(findParams)
    axios.get(`http://localhost:3001/api/events/${value}`)
      .then(response => {
        const currentLikes = response.data.likes
        axios.put(`http://localhost:3001/api/events/${response.data._id}`,{
          likes: currentLikes + 1
        },{withCredentials: true})
        let event = Object.assign({}, this.state.events[index], {likes: currentLikes + 1});
        let events = this.state.events
        events[index] = event;
        this.setState({events: events});
      }).catch(error => {
        console.log('likes error:', error)
      })
  }

  getAllpost() {
      axios.get("http://localhost:3001/api/posts")
      .then(response => {
        this.setState({ posts: response.data })
      }).catch(error => {
        console.log('Get All posts:', error)
      })
  }

  getAllevent() {
    axios.get("http://localhost:3001/api/events")
    .then(response => {
      this.setState({ events: response.data })
    }).catch(error => {
      console.log('Get All events:', error)
    })
}

  componentDidMount() {
    this.getAllpost();
    this.getAllevent();
  }

  render() {

    return (
      <>
        <div className='homeGrid'>
          <section className="totalPosts">
            <div className='eventCardDiv'>
              <h1>Event Cards:</h1>
                  <div className='top-posts'>
                    {this.state.events.map((post)=>{
                      // return <PostCard imgurl={post.imgurl} userName={post.userName} description={post.description}/>
                      return <EventCards action={this.handleClickEvent} title={post.title} imgurl={post.Image64} userName={post.userName} description={post.description} id={post._id} likes={post.likes}/>
                    })}
                  </div>
            </div>
            <div className='normalCardDiv'>
              <h1> Normal Posts:</h1>
                  <div className='top-posts'>
                    {this.state.posts.map((post)=>{
                      // return <PostCard imgurl={post.imgurl} userName={post.userName} description={post.description}/>
                      return <PostCard action={this.handleClick} title={post.title} imgurl={post.Image64} userName={post.userName} description={post.description} id={post._id} likes={post.likes}/>
                    })}
                  </div>
            </div>
          </section>
          <aside className="eventAside">
                <EventModal 
                />
          </aside>
        </div>
    </>
  );
}
}