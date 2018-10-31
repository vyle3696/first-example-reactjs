import React from 'react';

import './css/Error.css';
import {
  Link
  } from 'react-router-dom';  

class Error extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }
    componentWillMount() {
       
    }

    render() {

      return (
        <div className="code-container">
          <div className="code-area">
                  <span style={{color: "#777",fontStyle:"italic",}}>
                    // 404 page not found.
                  </span>
                  <span>
                        <span style={{color:"#d65562"}}>if </span>
                    
                        (<span style={{color:"#4ca8ef"}}>!</span>
                        <span style={{fontStyle: 'italic', color:'#bdbdbd'}}>found </span>)
                        {'{'}
                      </span>
                  <span>
                    <span style={{paddingLeft: '15px', color:"#2796ec"}}>
                      <i style={{width: '10px', display:'inline-block'}}></i>throw
                    </span>
                    <span>
                      (<span style={{color: '#a6a61f'}}>"(▰˘◡˘▰)"</span>);
                    </span>
                    <span style={{display:'block'}}>{'}'}</span>
                    <span style={{color: '#777', fontStyle:'italic'}}>
                      // <Link to="/">Go home!</Link>
                    </span>
                  </span>
                </div>
        </div>
        
      )
    }
}

export default Error;