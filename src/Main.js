import React from 'react';
import NavBar from './NavBar';
import Home from './Home';
import Footer from './Footer';
import Loading from './Loading';

import $ from "jquery";

import {
  Route,
  Switch
  } from 'react-router-dom';  

class Main extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            menuList: window.MenuList

        }
    }
    render(){
        return(
            <div>
                <NavBar menuList={this.state.menuList} root={this.props.root} parent={this}/>
                <Home/>
                <Footer/>
                <div id="btn-move-top">
                    <a href="#grid-sizer"><i className="fa fa-angle-up"></i></a>
                </div>
                <Loading/>
                
            </div>
        );
    }
}

export default Main;