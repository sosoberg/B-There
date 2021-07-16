import React from "react";
import './style.css'

import events from '../../events.json'

const EventModal = () => {
  
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

  var today = new Date();
  var dd = String(today.getDate()).padStart(2, 0);
  var mm = String(today.getMonth() + 1).padStart(2, '0');
  var yyyy = today.getFullYear();

  today = mm + '/' + dd + '/' + yyyy;

  var d = new Date();
  var n = d.getDay() - 1;

  // dotw = day of the week
  const dotw = days[n]

  const title = events[n].name
  const description = events[n].description
  const funfact = events[n].funfact
  const weblink = events[n].weblink

  return (
      <div>
          <p className='dotw'>{dotw}'s Event!</p>
            <h2 className='eventTitle'>{title}</h2>
              <p className='eventDescription'>
                {description}
              </p>
            <h3 className='funFactHeader'>FunFact:</h3>
                <p className='funFact'>
                  {funfact}
                </p>
                <p className='checkout'>
                  Check out the Maps page to find the event 
                  location, or find out more about {title} <a href={weblink}>here</a>!
                </p>
                <div class='futureEventsButtonDiv'>
                  <button className='futureEventsButton'>Future Events</button>
                </div>
        </div>
  );
};

export default EventModal;