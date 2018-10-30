import React from 'react';
import $ from 'jquery';

import PerfectScrollbar from 'perfect-scrollbar';

import './css/NavBar.css';
import {Support} from './Support.js';


var isNavVerExpand = false;
var isNavHorExpand = false;

class NavBar extends React.Component{
    constructor(props){
        super(props);
        this.onToggleMenuClick = this.onToggleMenuClick.bind(this);
        this.onHorizontalMenuClick = this.onHorizontalMenuClick.bind(this);
        this.onMenuItemClick = this.onMenuItemClick.bind(this);

    }


    componentDidMount(){
        window.controllNavigation();
        var psV = new PerfectScrollbar('#navv');
        var psH = new PerfectScrollbar('#navh');

        $("#navv").on("wheel", function ( e ) {
            e.preventDefault();
        });
    }

    setDelayMenuItem(){
        let deltaTime = 0.1;
        $(".list-load-animation > .menu-item").each((index, element)=>{
            $(element).css("animation-delay", deltaTime * (index + 1) + "s");
        });
    }

    onToggleMenuClick(event){
        if(isNavVerExpand){
            $(".nav-vertical").css({'left': '-250px'});
            $(".main-content").css({"left": '0'});
            
            $(".menu-close").text("MENU")
            $(".nav-vertical .nav-left > .top").removeClass("list-load-animation");

        }
        else{
            $(".nav-vertical").css({'left': '0'});
            $(".main-content").css({"left": '250px'});
            $(".menu-close").text("CLOSE")
            $(".nav-vertical .nav-left > .top").addClass("list-load-animation");
            this.setDelayMenuItem();
        }
        isNavVerExpand = !isNavVerExpand;
    }

    onHorizontalMenuClick(){
        if(isNavHorExpand){
            $(".nav-horizontal  .list-text").css('right', "-100%");
            $('.icon-expand').removeClass('xstyle');
            $(".nav-horizontal .list-text").removeClass("list-load-animation");
            $('body').removeClass('hide-scroll');
        }
        else{
            $(".nav-horizontal  .list-text").css("right", "0");
            $('.icon-expand').addClass("xstyle");
            $(".nav-horizontal .list-text").addClass("list-load-animation");
            this.setDelayMenuItem();
            $('body').addClass('hide-scroll');
        }
        isNavHorExpand = !isNavHorExpand;
    }


    onMenuItemClick(item, id){
        if(item.isPrivate){
           this.props.parent.props.history.push("/confirm/"+ id);
        }else{
            if(Support.isValidURL(item.link)){
                window.location.assign(item.link);
            }else{
                this.props.parent.props.history.push(item.link);
                //window.location.assign(window.location.origin + item.link);
            }
        }
    }

    render(){
        return(
            <div className="nav">
                <div className="nav-vertical">
                    <div className="nav-left">
                        <div id="navv" className="top list-menu scrollbar ps-container">
                            {this.props.menuList.map((item,index)=>(
                                <p className="menu-item" key={index} onClick={()=>{this.onMenuItemClick(item, index)}}>{item.text} </p>
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
                    <div className="social-icon">
                            <a><span><i className="material-icons" >share</i></span></a>
                            <ul className="list-icon">
                                <li><a target="_self" href="http://facebook.com/profile"> <i className="fa fa-facebook"></i></a></li>
                                <li><a target="_self" href="http://twitter.com/"> <i className="fa fa-twitter"></i></a></li>
                                <li><a target="_self" href="http://dribbble.com/"> <i className="fa fa-dribbble"></i></a></li>
                            </ul>
                            
                        </div>
                        <div className="expand-menu">
                            <div className = "icon-expand"  onClick={this.onHorizontalMenuClick}>
                                <i className="material-icons element-top " >remove</i>
                                <i className="material-icons element-center" >remove</i>
                                <i className="material-icons element-bottom">remove</i>
                            </div>
                            <div id="navh" className="list-text list-menu scrollbar ps-container">
                                {this.props.menuList.map((item,index)=>(
                                    <p className="menu-item" key={index} onClick={()=>{this.onMenuItemClick(item, index)}}>{item.text}</p>
                                ))}
                            </div>

                        </div>
                        
                        
                       
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default NavBar;

{/* <div className="expand"> <a><div className="burg"></div></a></div> */}