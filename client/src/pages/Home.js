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
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;

    return (
      <>
        <div className='homeGrid'>
          <section>
              <div className='top-posts'>
                {posts.map((post)=>{
                  return <PostCard imgurl={post.imgurl} userName={post.userName} description={post.description}/>
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