import React , {Component}from "react";
import PostCard from "../components/PostCard";
import posts from '../postdata';
// import axios from "axios";
import './style.css';

export default class Home extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props){
    super(props);
  }

  render() {
    return (
      <>
        <h1>Home</h1>
        <section className='top-post-container'>
          <h2>Top Posts</h2>
          <div className='top-posts'>
            {posts.map((post) => {
              return <PostCard imgurl={post.imgurl} userName={post.userName} description={post.description} />
            })}
          </div>
        </section>
        <aside>
          <h2>Events</h2>
        </aside>

        <h3>status: {this.props.loggedInStatus}</h3>
      </>
    );
 }
}