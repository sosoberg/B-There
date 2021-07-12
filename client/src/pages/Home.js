import React , {Component}from "react";
import PostCard from "../components/PostCard";
import posts from '../postdata';
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
        <div className='homeGrid'>
          <section>
              <h2>Top Posts</h2>
              <div className='top-posts'>
                {posts.map((post)=>{
                  return <PostCard imgurl={post.imgurl} userName={post.userName} description={post.description}/>
                })}
              </div>
          </section>
          <aside className="eventAside">
              <h2>Events</h2>
              <div className="eventDiv">
                
              </div>
          </aside>
        </div>
    </>
  );
}
}