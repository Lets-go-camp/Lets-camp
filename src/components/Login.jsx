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

const Login = props => {
  
  const {login} = props;
  return (
    <div className="Login">
      <Form className="Form" onSubmit={login}>
        <FormGroup>
          <Label for="email" hidden>Email</Label>
          <Input type="email" name="email" id="email" placeholder="Email" bsSize="large" />
        </FormGroup>
        <FormGroup>
          <Label for="password" hidden>Password</Label>
          <Input type="password" name="password" id="password" placeholder="Password" bsSize="large" />
          <Link to="/signup">
            <a href="./Signup.jsx"  color="primary" className="signup">signup now</a>
          </Link>
        </FormGroup>
        <Button bssize="lg" outline color="primary" >Explore</Button>
        {/* <Button bssize="lg"className="LoginBtn" color="white" >Explore</Button> */}
      </Form>
    </div>
  );
}

export default Login;
