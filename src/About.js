import React from 'react';
import marked from "marked";
import {Support} from './Support.js';

class About extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          idPage: 1
        };
        this.checkPermission = this.checkPermission.bind(this);
        this.checkPermission();
       
    }

    checkPermission(){
      console.log(sessionStorage.permission);
       let path = this.props.location.search;
        if(!(window.permission == path.substr(3)) || !sessionStorage.permission || !(path.substr(3) == sessionStorage.permission) ){
          this.props.history.push("/confirm/"+ this.state.idPage);
        }else{
          sessionStorage.permission = undefined;
         
        }
    }

    componentDidMount(){
      console.log('load About');
      const readmePath = require("./markdowns/about.md");
      
      fetch(readmePath)
        .then(response => {
          return response.text()
        })
        .then(text => {
          this.setState({
            markdown: marked(text)
          })
        })
    }

    render() {
    
    return (
        <section>
        <article dangerouslySetInnerHTML={{__html: this.state.markdown}}></article>
        </section>
    )
    }
}

export default About;