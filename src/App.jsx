import React, { Component } from 'react';
import axios from 'axios';
import Query from './components/Query.jsx';
import Landing from './components/Landing.jsx';
import Login from './components/Login.jsx';
import Results from './components/Results.jsx'
import { Link, Route, Switch } from 'react-router-dom';
// import { Button } from 'reactstrap';


import './components/stylesheet.css'

const parseString = require('xml2js').parseString;


class App extends Component {
  constructor(props){
      super(props);

        this.state = {
            pet: false,
            state: "",
            sewerHook: false,
            waterHook: false,
            waterFront: false,
            queriedGrounds: [],
        }
        this.petOnChange = this.petOnChange.bind(this)
        this.waterHookOnChange = this.waterHookOnChange.bind(this)
        this.sewerHookOnChange = this.sewerHookOnChange.bind(this)
        this.waterFrontOnChange = this.waterFrontOnChange.bind(this)
        this.stateOnChange = this.stateOnChange.bind(this)
        this.query = this.query.bind(this);
    }

    query(e){
        e.preventDefault();
        console.log('entered query')
        fetch('/camp/query', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                state: this.state.state,
                pet: this.state.pet,
                waterFront: this.state.waterFront,
                waterHook: this.state.waterHook,
                sewerHook: this.state.sewerHook
            })
        })
        .then(res => res.json())
        .then(data => {
            console.log('abc');
            console.log(JSON.stringify(data));
            const newState = Object.assign({}, this.state);
            newState.queriedGrounds = data;
            this.setState(newState);
        })
    }

  stateOnChange(e){
    console.log('stateOnChange called')
    const newState = Object.assign({}, this.state);
    newState.state = e.target.value;
    this.setState(newState);
  }
  
  petOnChange(){
    console.log('petOnChange called')
    if (this.state.pet === false){
      const newState = Object.assign({}, this.state)
      newState.pet = true;
      this.setState(newState)
    } else {
      const newState = Object.assign({}, this.state)
      newState.pet = false;
      this.setState(newState)
    }
  }
  
  sewerHookOnChange(){
    console.log('sewerHookOnChange called')
    if (this.state.sewerHook === false){
      const newState = Object.assign({}, this.state)
      newState.sewerHook = true;
      this.setState(newState)
    } else {
      const newState = Object.assign({}, this.state)
      newState.sewerHook = false;
      this.setState(newState)
    }
  }

  waterHookOnChange(){
    console.log('waterHookOnChange called')
    if (this.state.waterHook === false){
      const newState = Object.assign({}, this.state)
      newState.waterHook = true;
      this.setState(newState)
    } else {
      const newState = Object.assign({}, this.state)
      newState.waterHook = false;
      this.setState(newState)
    }
  }
  
  waterFrontOnChange(){
    console.log('waterFrontOnChange called')
    if (this.state.waterFront === false){
      const newState = Object.assign({}, this.state)
      newState.waterFront = true;
      this.setState(newState)
    } else {
      const newState = Object.assign({}, this.state)
      newState.waterFront = false;
      this.setState(newState)
    }
  }

  login(e){
    const user = e.target.email.value;
    const password = e.target.password.value;

    fetch('/user/login', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          username: user,
          password: password,
      })
    })
  }

  render() {
    return(
      <div >
         <ul>
          <li><Link to="/user">Login</Link></li>
          <li><Link to="/camp">Query</Link></li>
          <li><Link to="/landing">Results</Link></li>
        </ul>
        <Switch>
            <Route 
              exact path="/" 
              render = {() => <Landing />}
            />
            <Route 
              exact strict path="/user" 
              render= {() => <Login login={this.login}/>}
            />
            <Route 
              exact path="/camp" 
              render= {() => <Query stateOnChange={this.stateOnChange} petOnChange={this.petOnChange} waterHookOnChange={this.waterHookOnChange} sewerHookOnChange={this.sewerHookOnChange} waterFrontOnChange={this.waterFrontOnChange} queryCampground={this.query}/>}
            />
            <Route 
              exact path="/landing" 
              render= {() => <Results />}
            />
        </Switch>
      </div >
    )
  }
}

export default App;