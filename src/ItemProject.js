import React from 'react';

import './Home.css';
import './ItemProject.css';

class ItemProject extends React.Component{
    render(){
        return(
            <div ref="itemProject" className={`item-project grid-item col-xs-12 ${this.props.content.colBootstrap}`} onClick={()=>this.props.onItemProjectClick(this.props.content)}>
                <div className="item-project-inner">
                    <img id={`img-project-${this.props.content.id}`} className="bgd-img bgd-fixed" src={this.props.content.backgroundUrl} alt=""/>
                    <div className="item-content" style={{color:`${this.props.content.textColor}`}}>
                        <p className="project-name">{this.props.content.projecName}</p>
                        <p className="project-type">{this.props.content.projectType}</p>
                    </div> 
                </div>
            </div>
        );
    }
}

export default ItemProject;

/* <div className="project-icon">
    <a className="icon-view"><i className="fa fa-chain" style={{color:`${this.props.content.textColor}`}}></i></a>
    <a className="icon-detail"><i className="fa fa-photo" style={{color:`${this.props.content.textColor}`}}></i></a>
</div> */