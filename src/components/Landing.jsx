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