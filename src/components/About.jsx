import React from 'react';
import './AboutPage.less';
import about from '../about.json';
import Article from './Article.jsx';

const About = React.createClass ({

    getInitialState() {
        return {
            content: about
        }
    },
    render(){
        return (
            <div className="AboutPage">
               {
                   this.state.content.map( (item) =>
                       <Article
                           key={item.id}
                           title={item.title}
                           text={item.text}
                           imageURL={item.pictureURL}
                       />)
               }
            </div>
        )
    }
});

export default About;

