import React, { Component } from 'react';
import axios from 'axios';
import Query from './components/Query.jsx';
import Landing from './components/Landing.jsx';
import Login from './components/Login.jsx';
import Results from './components/Results.jsx';
import { Link, Route, Switch, Redirect } from 'react-router-dom';
import Signup from './components/Signup.jsx';
// import { Button } from 'reactstrap';

import './components/stylesheet.css';

const parseString = require('xml2js').parseString;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pet: false,
      state: '',
      sewerHook: false,
      waterHook: false,
      waterFront: false,

      queriedGrounds: [],
      queried: false,
      hasFavs: false,
      loggedIn: false,
      signedUp: false
    };

    this.signup = this.signup.bind(this);
    this.login = this.login.bind(this);
    this.petOnChange = this.petOnChange.bind(this);
    this.waterHookOnChange = this.waterHookOnChange.bind(this);
    this.sewerHookOnChange = this.sewerHookOnChange.bind(this);
    this.waterFrontOnChange = this.waterFrontOnChange.bind(this);
    this.stateOnChange = this.stateOnChange.bind(this);
    this.query = this.query.bind(this);
  }

  componentDidMount() {
    console.log('mounted');
  }

  signup(e) {
    e.preventDefault();
    const user = e.target.email.value;
    const pass = e.target.password.value;
    console.log('entered signup');
    fetch('/user/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: user,
        password: pass
      })
    })
      .then(res => res.json())
      .then(data => {
        if (data) {
          const newState = Object.assign({}, this.state);
          newState.signedUp = true;
          this.setState(newState);
          console.log(this.state.signedUp);
          console.log('signup complete');
        }
      });
  }

  login(e) {
    e.preventDefault();
    const user = e.target.email.value;
    const pass = e.target.password.value;
    console.log('login user: ', user);
    console.log('login pass: ', pass);
    fetch('/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: user,
        password: pass
      })
    })
      .then(res => res.json())
      .then(data => {
        if (data) {
          const newState = Object.assign({}, this.state);
          newState.loggedIn = true;
          console.log('in here');
          this.setState(newState);
          console.log(this.state.loggedIn);
          console.log('reset state');
        }
      });
  }

  query(e) {
    e.preventDefault();
    console.log(e.target);
    console.log('entered query');
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
        const newState = Object.assign({}, this.state);
        newState.queriedGrounds = data;
        newState.queried = true;
        console.log(newState);
        this.setState(newState);
      });
  }

  stateOnChange(e) {
    console.log('stateOnChange called');
    const newState = Object.assign({}, this.state);
    newState.state = e.target.value;
    this.setState(newState);
  }

  petOnChange() {
    console.log('petOnChange called');
    if (this.state.pet === false) {
      const newState = Object.assign({}, this.state);
      newState.pet = true;
      this.setState(newState);
    } else {
      const newState = Object.assign({}, this.state);
      newState.pet = false;
      this.setState(newState);
    }
  }

  sewerHookOnChange() {
    console.log('sewerHookOnChange called');
    if (this.state.sewerHook === false) {
      const newState = Object.assign({}, this.state);
      newState.sewerHook = true;
      this.setState(newState);
    } else {
      const newState = Object.assign({}, this.state);
      newState.sewerHook = false;
      this.setState(newState);
    }
  }

  waterHookOnChange() {
    console.log('waterHookOnChange called');
    if (this.state.waterHook === false) {
      const newState = Object.assign({}, this.state);
      newState.waterHook = true;
      this.setState(newState);
    } else {
      const newState = Object.assign({}, this.state);
      newState.waterHook = false;
      this.setState(newState);
    }
  }

  waterFrontOnChange() {
    console.log('waterFrontOnChange called');
    if (this.state.waterFront === false) {
      const newState = Object.assign({}, this.state);
      newState.waterFront = true;
      this.setState(newState);
    } else {
      const newState = Object.assign({}, this.state);
      newState.waterFront = false;
      this.setState(newState);
    }
  }

  render() {
    let loggedin = this.state.loggedIn;
    let queryResponse = this.state.queried;
    let signedUp = this.state.signedUp;

    return (
      <div className='container'>
        <Switch>
          <Route exact path='/'>
            {loggedin ? (
              <Landing hasFavs={this.state.hasFavs} />
            ) : (
              <Login login={this.login} />
            )}
          </Route>
          <Route exact path='/camp'>
            {queryResponse ? (
              <Redirect to='/results' />
            ) : (
              <Query
                stateOnChange={this.stateOnChange}
                petOnChange={this.petOnChange}
                waterHookOnChange={this.waterHookOnChange}
                sewerHookOnChange={this.sewerHookOnChange}
                waterFrontOnChange={this.waterFrontOnChange}
                query={this.query}
              />
            )}
          </Route>
          <Route
            exact
            path='/results'
            render={() => (
              <Results queriedGrounds={this.state.queriedGrounds} />
            )}
          />
          <Route exact path='/signup'>
            {signedUp ? (
              <Landing hasFavs={this.state.hasFavs} />
            ) : (
              <Signup signup={this.signup} />
            )}
          </Route>
          <Route exact path='/landing'>
            {queryResponse ? (
              <Redirect to='/results' />
            ) : (
              <Login login={this.login} />
            )}
            render = {() => <Landing hasFavs={this.state.hasFavs} />}
          </Route>
          <Route exact path='/landing/ayypresent'>
            <Landing hasFavs={this.state.hasFavs} />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
