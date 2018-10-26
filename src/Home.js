import React from 'react';

//import {ProjectList} from './ProjectList.js';

import ItemProject from './ItemProject';
//import ItemProjectUp from './ItemProjectUp';
import ItemProjectUpSlide from './ItemProjectUpSlide';

import './Home.css';
import $ from 'jquery';

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            list: window.ProjectList,
            preview: window.ProjectList[0],
            detail: ""

        }
        //console.log(this.state.list);
        this.onItemProjectClick = this.onItemProjectClick.bind(this);
        this.closeDetail = this.closeDetail.bind(this);
    }

    onItemProjectClick(content){
        $(".bgd-img").removeClass("item-fade-in-center");
        // console.log(content);
        this.setState({
            detail: <ItemProjectUpSlide content={content} parent = {this} closeDetail = {this.closeDetail}/>
        });
    }

    closeDetail(){
        this.setState({
            detail: ""
        });
        $('body').removeClass('hide-scroll');
    }

    render(){
        return(
            <div className="main-content">
                <div className="project-list">
                    <div className=" row grid">
                        <div id="grid-sizer" className="grid-sizer "></div>
                        {this.state.list.map(item=>(
                            <ItemProject key={item.id} content={item} onItemProjectClick={this.onItemProjectClick}/>
                        ))}
                    </div>

                    {this.state.detail}
                </div>
                {}
            </div>
        );
    }
}

export default Home;