import React, { Component } from 'react';
import jQuery from 'jquery';

import Main from './Main';
import Error from './Error';
import About from './About';
import Test from './Test';
import ConfirmPage from './ConfirmPage';

import $ from "jquery";

import {
  Route,
  Switch
  } from 'react-router-dom';  

  import marked from "marked";

  
class App extends Component {
  componentDidMount(){
    console.log('load App');
    
  }
  render() {
    return(
        <div>
        <Switch>
            <Route exact  path="/confirm/:id" render={(props)=><ConfirmPage {...props} root={this} url="success"/>}/>
            <Route exact path="/about" render={(props)=><About {...props} root={this}/>} />
            <Route exact path="/test" render={(props)=><Test {...props} root={this}/>} />
            
            <Route exact  path="/" render={(props)=><Main {...props} root={this}/>} />
            
            <Route component={Error} />
        </Switch>
        </div>
    );
    
  }
}

export default App;

