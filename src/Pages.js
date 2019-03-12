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
        this.getMarkdown = this.getMarkdown.bind(this);      
       
    }

    checkPermission(){
      Support.parseObjectFormFile('config/menu.json')
      .then( response => {
            let MenuList = response.data;        
            let pathname = this.props.location.pathname;

            if(Support.isRequirePermissionLink(pathname, MenuList)){
                let key = Support.getParamFromURL('k');
                
                if(!key || !(window.permission == key)){
                  let url ="/confirm";	
                  this.props.history.push({
                      pathname: "/confirm",
                      state: {
                          page: pathname
                      }
                  });
                  
               
                }else{
                  this.getMarkdown();
                }
            }else{
              this.getMarkdown();
            }
        
      });      
      
    }

    getMarkdown(){
      this.setState({
        page:this.props.match.params.page
        }, ()=>{
          var rootUrl =  window.location.protocol  +'//'+  window.location.hostname +(window.location.port ? ':'+ window.location.port: '');               
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

    componentDidMount(){
      this.checkPermission();
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