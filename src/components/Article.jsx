import React from 'react';

class Article extends React.Component {
    constructor (props) {
        super(props)
    }
    render () {
        const {title, text, imageURL} = this.props;

        return (
            <div>
                <h2 className='title'>
                    {title}
                </h2>
                <div className="image">
                    <img src={imageURL} width="900" height="300"/>
                </div>
                <div className='text'>
                    {text}
                </div>
            </div>
        )
    }
}

export default Article;