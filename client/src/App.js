import React, { useState } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    if(!savedList.find(savedMovie => savedMovie === movie))
      setSavedList( [...savedList, movie] );
  };

  return (
      <div>
        <SavedList list = {savedList} />
        <Route exact path = "/" render = {(props) => <MovieList {...props} list = {savedList} />} />
        <Route path = "/movies/:id" render = {(props) => <Movie {...props} save = {addToSavedList} />} />
        <div>Replace this Div with your Routes</div>
      </div>
  );
};

export default App;
