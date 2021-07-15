import React , {Component}from "react";
import PostCard from "../components/PostCard";
import EventCards from "../components/eventPostCard";
// import posts from '../postdata';
import axios from 'axios';
import './style.css';

export default class Home extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props){
    super(props);

    this.state = {
      posts: [],
      events: []
    }
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
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;

    return (
      <>
        <div className='homeGrid'>
          <section>
          <h1>Event Cards:</h1>
              <div className='top-posts'>
                {this.state.events.map((post)=>{
                  // return <PostCard imgurl={post.imgurl} userName={post.userName} description={post.description}/>
                  return <EventCards title={post.title} imgurl={post.Image64} userName={post.userName} description={post.description} id={post._id} likes={post.likes}/>
                })}
              </div>
          <h1> Normal Posts:</h1>
              <div className='top-posts'>
                {this.state.posts.map((post)=>{
                  // return <PostCard imgurl={post.imgurl} userName={post.userName} description={post.description}/>
                  return <PostCard title={post.title} imgurl={post.Image64} userName={post.userName} description={post.description} id={post._id} likes={post.likes}/>
                })}
              </div>
          </section>
          <aside className="eventAside">
              <h2>Events</h2>
                <p>
                  words words words words words
                  words words words words words
                  words words words words words
                  words words words words words
                  words words words words words
                </p>
                <div className="eventDiv">
                    <p>{today}</p>
                </div>
          </aside>
        </div>
    </>
  );
}
}