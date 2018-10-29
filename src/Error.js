import React from 'react';
import marked from "marked";

class Error extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }
    componentWillMount() {
        const readmePath = require("./404.md");
      
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
    const { markdown } = this.state;

    return (
        <section>
        <article dangerouslySetInnerHTML={{__html: markdown}}></article>
        </section>
    )
    }
}

export default Error;