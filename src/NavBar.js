import React from 'react';
import ReactDome from 'react-dom';
import $ from 'jquery';

import './index.css';
import './NavBar.css';

var isNavVerExpand = false;
class NavBar extends React.Component{
    constructor(props){
        super(props);
        this.onToggleMenuClick = this.onToggleMenuClick.bind(this);
    }


    componentDidMount(){
       
    }

    setDelayVerticalMenuItem(){
        let deltaTime = 0.1;
        $(".list-load-animation.top > p").each((index, element)=>{
            $(element).css("animation-delay", deltaTime * (index + 1) + "s");
            
        });
    }

    onToggleMenuClick(event){
        console.log("clicked");
        if(isNavVerExpand){
            $(".nav-vertical").css({left: '-250px'});
            $(".main-content").css({"left": '0'});
            
            $(".menu-close").text("MENU")
            $(".nav-vertical .nav-left > .top").removeClass("list-load-animation");

        }
        else{
            $(".nav-vertical").css({left: '0'});
            $(".main-content").css({"left": '250px'});
            $(".menu-close").text("CLOSE")
            $(".nav-vertical .nav-left > .top").addClass("list-load-animation");
            this.setDelayVerticalMenuItem();
        }
        isNavVerExpand = !isNavVerExpand;
    }
    render(){
        return(
            <div className="nav">
                <div className="nav-vertical">
                    <div className="nav-left">
                        <div className="top list-menu">
                            {this.props.menuList.map((item,index)=>(
                                <p key={index}>{item.text}</p>
                            ))}
                        </div>
                        <div className="bottom">
                            <p className="copyright">Copyright © 2017 All Rights Reserved.</p>
                        </div>
                    </div>
                    <div className="nav-right">
                        <div className="top">
                            <img src={require("./images/fortune-logo3_white.png")} alt="home-logo"/>
                        </div>
                        <div className="center">
                            <p className="menu-close" onClick={this.onToggleMenuClick}>MENU</p>
                        </div>
                        <div className="bottom">
                            <div className="social-icon">
                            <li><a target="_self" href="http://facebook.com/profile"> <i className="fa fa-facebook"></i></a></li>
                                <li><a target="_self" href="http://twitter.com/"> <i className="fa fa-twitter"></i></a></li>
                                <li><a target="_self" href="http://dribbble.com/"> <i className="fa fa-dribbble"></i></a></li>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="nav-horizontal">
                    <div className="logo-header">
                    <img src={require("./images/fortune-logo3_white.png")} alt="home-logo"/>
                    </div>

                    <div className="menu-header">
                        <div className="expand-menu">
                            <div className = "icon-expand">
                                <i className="material-icons element-top " >remove</i>
                                <i className="material-icons element-center" >remove</i>
                                <i className="material-icons element-bottom">remove</i>
                            </div>
                            <div className="list-text list-menu">
                                {this.props.menuList.map((item,index)=>(
                                    <p key={index}>{item.text}</p>
                                ))}
                            </div>
                        </div>
                        <div className="social-icon">
                            <a><span><i className="material-icons" >share</i></span></a>
                            <ul className="list-icon">
                                <li><a target="_self" href="http://facebook.com/profile"> <i className="fa fa-facebook"></i></a></li>
                                <li><a target="_self" href="http://twitter.com/"> <i className="fa fa-twitter"></i></a></li>
                                <li><a target="_self" href="http://dribbble.com/"> <i className="fa fa-dribbble"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default NavBar;