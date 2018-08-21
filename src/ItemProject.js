import React from 'react';
import ReactDom from 'react-dom';

import './Home.css';
import './ItemProject.css';

class ItemProject extends React.Component{
    constructor(props){
        super(props);
        
    }
    render(){
        return(
            <div className={`item-project grid-item col-xs-12 ${this.props.content.colBootstrap}`}>
                <div className="item-project-inner">
                    <img className="bgd-img" src={this.props.content.backgroundUrl}/>
                    <div className="item-content" style={{color:`${this.props.content.textColor}`}}>
                        <p className="project-name">{this.props.content.projecName}</p>
                        <p className="project-type">{this.props.content.projectType}</p>
                        <div className="project-icon">
                            <a className="icon-view"><i className="fa fa-chain" style={{color:`${this.props.content.textColor}`}}></i></a>
                            <a className="icon-detail"><i className="fa fa-photo" style={{color:`${this.props.content.textColor}`}}></i></a>
                        </div>
                    </div> 
                </div>
            </div>
        );
    }
}

export default ItemProject;