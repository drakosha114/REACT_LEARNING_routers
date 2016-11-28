import React from 'react';
import './AboutPage.less';
import about from '../about.json';
import Article from './Article.jsx';

class About extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            content: about
        };
    };

    render(){
        return (
            <div className="AboutPage">
               {
                   this.state.content.map( (item) =>
                       <Article
                            id={item.id}
                           title={item.title}
                           text={item.text}
                           imageURL={item.pictureURL}
                       />)
               }
            </div>
        )
    };
}

export default About;

