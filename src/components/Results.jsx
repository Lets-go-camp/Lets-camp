import React, { Component } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import { 
  Container, 
  Button, 
  Form, 
  FormGroup, 
  Label, 
  Input, 
  FormText 
} from 'reactstrap';

const Results = props => {

  const results = []
  return (
      <div className="Results">
        <h1>Your Next Adventure Awaits</h1>
        {results}
      </div>
  );
}

export default Results;