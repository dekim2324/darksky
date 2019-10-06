import React, { Component } from 'react';

class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            location: ''
        }
    };

    handleChange(e) {
        this.setState({
            location: e.target.value
        })
    };

    handleSubmit(e) {
        alert(this.state.location)
    }

    render() {
        const style = {
            textAlign: 'center',
            margin: '30px'
        }
        return (
            <div style={style}>
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <input 
                    onChange={(e) => this.handleChange(e)} 
                    type='text'></input>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default Search