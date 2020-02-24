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

  const favs = [];


  return (
    <div className="Landing">
      <h1>Let's Go Camping</h1>
      <Button size="large" outline color="primary">Find Camps</Button>
      <h3>Your Favorites</h3>
      {favs}   
   </div>
  )
}

export default landing;