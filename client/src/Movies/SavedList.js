import React from 'react';
import {Link, NavLink} from 'react-router-dom';

const SavedList = props => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      <NavLink to = {`/movies/${movie.id}`} className="saved-movie" activeStyle = {{color: "red", textDecoration: "underline"}}>
        {movie.title}
      </NavLink>
    ))}
    <Link to = "/" className="home-button">Home</Link>
  </div> 
);

export default SavedList;
