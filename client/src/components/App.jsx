import React, {Component} from 'react';
import Nav from './Nav.jsx';
import Search from './Search.jsx';

class App extends Component {
    constructor() {
        super();


    }

    render() {
        return(
            <div>
                <Nav />    
                <Search />
            </div>
        )
    }
}
export default App;