/**
 * Created by askrypai on 11/28/16.
 */
import ReactDOM from 'react-dom';
import React from 'react'
import {Router, Route, hashHistory} from 'react-router';
import App from './App.jsx';
import About from './components/About.jsx';
import Inbox from './components/Inbox.jsx';
import Message from './components/Message.jsx';

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <Route path="/about" component={About}/>
            <Route path="/inbox" component={Inbox}>
                <Route path="/inbox/messages/:messageId" component={Message}/>
            </Route>
        </Route>
    </Router>,
    document.getElementById('root')
);