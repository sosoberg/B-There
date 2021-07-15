import React , {Component} from "react";
import PostCard from "../components/PostCard";

import axios from 'axios';
import './style.css';

import EventModal from "../components/EventModal";

export default class Home extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props){
    super(props);
    this.state = {
      posts: []
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

  componentDidMount() {
    this.getAllpost();
  }

  render() {

    return (
      <>
        <div className='homeGrid'>
          <section>
              <div className='top-posts'>
                {this.state.posts.map((post)=>{
                  // return <PostCard imgurl={post.imgurl} userName={post.userName} description={post.description}/>
                  return <PostCard title={post.title} imgurl={post.Image64} userName={post.userName} description={post.description} id={post._id} likes={post.likes}/>
                })}
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