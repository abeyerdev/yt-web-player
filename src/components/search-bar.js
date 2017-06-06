// always import React since transpiling will use React.createElement() and so on...
import React, { Component } from 'react'; 

class SearchBar extends Component {

    constructor(props) {
        super(props);

        // this is the only place we explicitly assign state; only class-based components have state
        this.state = { term: '' }
    }

    render() {
        return (
            <div>
                <input
                    // this turns the input into a controlled input, form element
                    value = { this.state.term } 
                    // this.setState causes component to rerender
                    onChange = { event => this.setState({ term: event.target.value }) } 
                />
            </div>
        );
    }
}

export default SearchBar;