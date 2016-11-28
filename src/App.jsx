import React from 'react'
import './App.less';
import Menu from './components/Menu.jsx';


class App extends React.Component {
    render(){
        return (
            <div className="App">
                <Menu/>
                <div className='content'>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default App;