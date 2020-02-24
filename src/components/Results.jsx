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
  const { queriedGrounds } = props;

  let homeButton;
  if(results.length > 0){
    homeButton = <Button className="findMore" color="secondary" >Find More </Button>;
  }

  
  const results = queryResults.map(camp => {
    <Camp camp={camp}/>
  }) 
  return (
      <div className="Results">
        <h1>Your Next Adventure Awaits</h1>
        <Button className="returnHome" outline color="info">Return Home </Button>
        <Table hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          {results}
        </tbody>
      </Table>
        {homeButton}
      </div>
  );
}

export default Results;