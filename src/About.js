import React from 'react';
import marked from "marked";

class About extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          idPage: 1
        };
        this.checkPermission = this.checkPermission.bind(this);

       
    }

    checkPermission(){
      console.log(sessionStorage.getItem("permission"));
       let path = this.props.location.search;
        if( !sessionStorage.getItem("permission") || !(path.substr(3) == sessionStorage.getItem("permission")) ){
          this.props.history.push("/confirm/"+ this.state.idPage);
        }else{
          sessionStorage.removeItem("permission");
          sessionStorage.clear();
        }


    }

    componentDidUpdate(){
     
    }

    componentWillMount() {
      this.checkPermission();

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

    componentDidMount(){
      console.log('load About');
    }

    render() {
    const { markdown } = this.state;

    return (
        <section>
        <article dangerouslySetInnerHTML={{__html: markdown}}></article>
        </section>
    )
    }
}

export default About;