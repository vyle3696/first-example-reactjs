import React from 'react';

import ItemProject from './ItemProject';

import Detail from './Detail';
import {Support} from './Support.js';
import './css/Home.css';
import $ from 'jquery';

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            list: [],
            preview: [],
            detail: ""

        }
        
        //console.log(this.state.list);
        this.onItemProjectClick = this.onItemProjectClick.bind(this);
        this.closeDetail = this.closeDetail.bind(this);
    }

    componentDidMount(){
        Support.parseObjectFormFile('projects-list.json')
        .then( response => {
            this.setState({
                list: response.data
            });
            window.loadMarsonry();
            window.controllButtonMoveTop();
        });      

    }

    onItemProjectClick(content){
        $(".bgd-img").removeClass("item-fade-in-center");
        // console.log(content);
        // this.setState({
        //     detail: <ItemProjectUpSlide content={content} parent = {this} closeDetail = {this.closeDetail}/>
        // });

        this.setState({
            detail: <Detail content={content} parent = {this} closeDetail = {this.closeDetail}/>
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
            
                <div className="project-list">
                    <div className=" row grid">
                        <div id="grid-sizer" className="grid-sizer "></div>
                        {this.state.list.map(item=>(
                            <ItemProject key={item.id} content={item} onItemProjectClick={this.onItemProjectClick}/>
                        ))}
                    </div>

                    {this.state.detail}
                </div>
            
        );
    }
}

export default Home;