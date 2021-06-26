import React from "react";
import './style.css';

function Map() {
  return (
    <div>
        <h1>Map</h1>
        <iframe title="googlemap" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d21518.754608911164!2d-122.32602421222188!3d47.609716619504056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1624734631684!5m2!1sen!2sus" width="" height="" allowFullScreen={true} loading="lazy"></iframe>
    </div>
  );
}

export default Map;