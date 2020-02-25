import React, { Component } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import {
  Button
} from 'reactstrap'

/* The Landing page is the page our users are presented with on login or signup. Here, we 
meant to render our current favorites in cards that might provide additional details for the campsites 
our users have favorited as well as a button that takes them to our Query page in Query.jsx in order to find 
potential campgrounds via the Active API. */

const landing = props => {

  const { hasFavs } = props;
  const favs = [];

  let favsheader;
  
  if(hasFavs === true){
    favsheader = <h3>Your Favorites</h3>;
  }

  return (
    <div className="Landing">
      <h1>Let's Go Camping</h1>
      <Link to="/camp">
        <Button size="large" outline color="primary">Find Camps</Button>
      </Link>
      {favsheader}
      {favs}   
   </div>
  )
}

export default landing;