import React from "react";
import PostCard from "../components/PostCard";
import posts from '../postdata';
import './style.css';

function Home() {
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

export default Home;