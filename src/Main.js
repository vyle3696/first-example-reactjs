import React from 'react';
import ReactDom from 'react-dom';
import NavBar from './NavBar';
import Home from './Home';
import Footer from './Footer';

class Main extends React.Component{
    render(){
        return(
            <div>
                <NavBar/>
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