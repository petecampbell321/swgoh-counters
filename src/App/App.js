import React from 'react';
import {
  BrowserRouter, Redirect, Switch,
} from 'react-router-dom';

import MyNavbar from '../components/MyNavbar/MyNavbar';
import Counters5v5 from '../components/Counters5v5/Counters5v5';

import './App.scss';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <React.Fragment>
            <MyNavbar />
            <div>
                <Switch>
                  <Counters5v5 path="/swgoh-counters" />
                  {/* <Counters3v3 path="/counters3v3" /> */}
                  <Redirect from="*" to="/swgoh-counters" />
                </Switch>
            </div>
          </React.Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;