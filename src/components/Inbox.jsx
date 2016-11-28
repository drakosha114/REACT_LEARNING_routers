import React from 'react';
import './InboxPage.less';
import messages from '../messages.json';
import MessagePreview from './MessagePrieview.jsx';

const Inbox = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },
    getInitialState() {
        return {
            messages
        };
    },
    handlePreviewClick(messageId) {
        this.context.router.push(`/inbox/messages/${messageId}`);
    },
    render() {
        const { messages } = this.state;

        const { messageId: selectedMessageId } = this.props.params;

        return (
            <div className='InboxPage'>
                <div className='messages'>
                    {
                        messages.map(message =>
                            <MessagePreview
                                key={message.id}
                                selected={message.id === selectedMessageId}
                                onClick={this.handlePreviewClick.bind(null, message.id)}
                                title={message.subject}
                                senderName={message.senderName}
                            />
                        )
                    }
                </div>
                <div className='message-container'>
                    {this.props.children}
                </div>
            </div>
        );
    }
});

export default Inbox;