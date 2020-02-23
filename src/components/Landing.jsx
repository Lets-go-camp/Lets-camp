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
    <div>
      <h1>Let's Go Camping</h1>
      <Button size="large" outline color="primary">Let's Go Camping</Button>
      <h3>Your Favorites</h3>
      {favs}   
   </div>
  )
}

export default landing;