import React from 'react';
import ReactDom from 'react-dom';
import NavBar from './NavBar';
import Home from './Home';
import Footer from './Footer';

import {MenuList} from './MenuList';

class Main extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            menuList: MenuList

        }
    }
    render(){
        return(
            <div>
                <NavBar menuList={this.state.menuList}/>
                <Home/>
                <Footer/>
                <div id="btn-move-top">
                    <a href="#grid-sizer"><i className="fa fa-angle-up"></i></a>
                </div>
            </div>
        );
    }
}

export default Main;