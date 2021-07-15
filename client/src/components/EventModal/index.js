import React from "react";
import './style.css'

import events from '../../events.json'

const EventModal = () => {
  
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, 0);
  var mm = String(today.getMonth() + 1).padStart(2, '0');
  var yyyy = today.getFullYear();

  today = mm + '/' + dd + '/' + yyyy;

  var d = new Date();
  var n = d.getDay() - 1;

  const title = events[n].name
  const description = events[n].description
  const funfact = events[n].funfact
  const weblink = events[n].weblink

  return (
      <div>
            <h2>{title}</h2>
                <p>
                  {description}
                </p>
                <p>FunFact:</p>
                <p>
                  {funfact}
                </p>
                <a href={weblink}>Location Website</a>
                <div className="eventDiv">
                    <p>{today}</p>
                </div>
        </div>
  );
};

export default EventModal;