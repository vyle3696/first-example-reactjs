import React from 'react';
import marked from "marked";

class About extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }
    componentWillMount() {
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