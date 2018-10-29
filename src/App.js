import React, { Component } from 'react';


import Main from './Main';
import ConfirmPage from './ConfirmPage';

import $ from "jquery";

import {
  Route,
  Switch
  } from 'react-router-dom';  



class App extends Component {
 

   

  render() {
    return(
        <div>
        <Switch>
            <Route path="/confirm/:id" render={(props)=><ConfirmPage {...props} root={this} url="success"/>}/>
             <Route path="/" render={(props)=><Main {...props} root={this}/>} />
        </Switch>
        </div>
    );
    
  }
}

export default App;

