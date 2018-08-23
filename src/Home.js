import React from 'react';
import ReactDom from 'react-dom';

import {ProjectList} from './ProjectList.js';
import ItemProject from './ItemProject';
//import ItemProjectUp from './ItemProjectUp';
import ItemProjectUpSlide from './ItemProjectUpSlide';

import './Home.css';
import $ from 'jquery';

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            list: ProjectList,
            preview: ProjectList[0]

        }
        //console.log(this.state.list);
        this.onItemProjectClick = this.onItemProjectClick.bind(this);
    }

    onItemProjectClick(content){
        $(".bgd-img").removeClass("item-fade-in-center");
        console.log(content);
        this.setState({preview: content}, function () {
            console.log(this.state.preview);
        });
        
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

                    
                </div>
                <ItemProjectUpSlide ref="preview" content={this.state.preview}/>
            </div>
        );
    }
}

export default Home;