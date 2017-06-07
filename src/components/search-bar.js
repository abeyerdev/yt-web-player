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
            <div className="search-bar">
                <input
                    // this turns the input into a controlled input, form element
                    value = { this.state.term } 
                    onChange = { event =>  this.onInputChange(event.target.value) } 
                />
            </div>
        );
    }

    onInputChange(term) {
        this.setState({ term: term });
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar;