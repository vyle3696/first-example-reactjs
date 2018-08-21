import React from 'react';
import ReactDom from 'react-dom';

import {ProjectList} from './ProjectList.js';
import ItemProject from './ItemProject';

import './Home.css';

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            list: ProjectList
        }
        //console.log(this.state.list);
    }
    render(){
        return(
            <div className="main-content">
                <div className="project-list">
                    <div className=" row grid">
                        <div id="grid-sizer" className="grid-sizer "></div>
                        {this.state.list.map(item=>(
                            <ItemProject key={item.id} content={item}/>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;