import React from 'react';

function Tutorial({ tutorial }) {
  return (
    <div className="card mb-4">
      <img className="card-img-top h=50px, w=50px" src={tutorial.image} alt={tutorial.title} />
      <div className="card-body">
        <h5 className="card-title">{tutorial.title}</h5>
        <p className="card-text">{tutorial.description}</p>
        <a href={tutorial.link} className="btn btn-primary">Learn More</a>
      </div>
    </div>
  );
}

export default Tutorial;
