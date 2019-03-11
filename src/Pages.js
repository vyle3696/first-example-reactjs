import React from 'react';
import marked from "marked";
import {Support} from './Support.js';
import './css/markdown.css';

class Pages extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          page: ''
        };
        this.checkPermission = this.checkPermission.bind(this);
        this.checkPermission();
       
    }

    checkPermission(){
      console.log(sessionStorage.permission);
       let path = this.props.location.search;

       // || !sessionStorage.permission || !(path.substr(3) == sessionStorage.permission) not use
        if(!(window.permission == path.substr(3))){
          this.props.history.push("/confirm/"+ this.state.idPage);
        }
    }

    componentDidMount(){
      console.log(this.props.match.params.page);
      this.setState({
          page:this.props.match.params.page
      }, ()=>{
        var rootUrl =  window.location.protocol  +'//'+  window.location.hostname +(window.location.port ? ':'+ window.location.port: '');    

          // let path = "./markdowns/"+ this.state.page;            
          try{
            const readmePath = rootUrl + "/markdowns/"+ this.state.page;         
            fetch(readmePath)
              .then(response => {               
                return response.text();
              })
              .then(text => {
                if(text.indexOf("<!DOCTYPE html>") == 0 || text.indexOf('<html') == 0){
                  this.props.history.push('/error');
                }
                this.setState({
                  markdown: marked(text)
                })
              })
          }   
          catch(error){
            this.props.history.push('/error');
          }   
          
      });

      

    }

    render() {
      if(this.state.markdown){
          return (
            <section className="markdown-section">
            <article dangerouslySetInnerHTML={{__html: this.state.markdown}}></article>
            </section>
          )
      }
      else{
        return (<div></div>);
      }
    
    }
}

export default Pages;