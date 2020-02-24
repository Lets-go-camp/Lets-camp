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

const Signup = props => {
  const {signup} = props;
  return (
    <div className="Signup"> 
      <Form className="Form" onSubmit={signup}>
        <FormGroup>
          <Label for="email" hidden>Email</Label>
          <Input type="email" name="email" id="email" placeholder="Email" bsSize="large" />
        </FormGroup>
        <FormGroup>
          <Label for="password" hidden>Password</Label>
          <Input type="password" name="password" id="password" placeholder="Password" bsSize="large" />
        </FormGroup>
        <Link to="/landing">
          <Button value="Submit" bssize="lg" outline color="secondary" >Get Started </Button>
        </Link>
      </Form>
    </div>
  );
}

export default Signup;