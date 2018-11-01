import React, { Component } from 'react';
import jQuery from 'jquery';

import NavBar from './NavBar';
import Main from './Main';
import Error from './Error';
import About from './About';
import Contact from './Contact';
import Test from './Test';
import ConfirmPage from './ConfirmPage';

import $ from "jquery";

import {
  Route,
  Switch
  } from 'react-router-dom';  
  
class App extends Component {
  componentDidMount(){
    console.log('load App');
    
  }
  render() {
    return(
      <React.Fragment>
          <NavBar menuList={window.MenuList} root={this}/>
          <div className="main-content">
            <Switch>
              <Route exact  path="/confirm/:id" render={(props)=><ConfirmPage {...props} root={this} url="success"/>}/>
              <Route exact path="/about" render={(props)=><About {...props} root={this}/>} />
              <Route exact path="/contact" render={(props)=><Contact {...props} root={this}/>} />
              <Route exact path="/test" render={(props)=><Test {...props} root={this}/>} />
              
              <Route exact  path="/" render={(props)=><Main {...props} root={this}/>} />
              
              <Route component={Error} />
           </Switch>
        </div>
        
        
      </React.Fragment>
    );
    
  }
}

export default App;

