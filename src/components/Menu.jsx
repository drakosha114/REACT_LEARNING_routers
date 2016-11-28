import React from 'react';
import {Link} from 'react-router'

const Menu = React.createClass ({
    render(){
        return (
            <div className='menu-bar'>
                <div className='menu-item'>
                    <Link activeClassName={'active'} className='menu-item-link' to='/about'>About</Link>
                </div>

                <div className='menu-item'>
                    <Link activeClassName={'active'} className='menu-item-link' to='/inbox'>Inbox</Link>
                </div>
            </div>
        )
    }
});

export default Menu;