import React from 'react';
import './InboxPage.less';
import messages from '../messages.json';
import Message from './Message.jsx';

class Inbox extends React.Component {
    constructor (props){
        super(props);
        this.state = {
            messages: messages
        }
    };

    render(){
        return (
            <div className='InboxPage'>
                <div className='messages'>
                    {this.state.messages.map(message => <Message/>)}
                </div>
                <div className="message-container">
                    sdsadasd
                </div>
            </div>
        )
    };
};

export default Inbox;