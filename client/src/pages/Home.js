import React from "react";
import PostCard from "../components/PostCard";
import posts from '../postdata';
import './style.css';

function Home() {
  return (
    <>
        <h1>Home</h1>
        <section className='top-post-container'>
            <h2>Top Posts</h2>
            <div className= 'top-posts'>
              {posts.map((post)=>{
                return <PostCard imgurl={post.imgurl} userName={post.userName} description={post.description}/>
              })}
            </div>
        </section>
        <aside>
            <h2>Events</h2>
        </aside>
    </>
  );
}

export default Home;