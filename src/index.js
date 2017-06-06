import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search-bar';

const API_KEY = 'AIzaSyBpBcjaVlCzI3FELyF5hRW31Vza1LG5GJU';

// ALWAYS ONE COMPONENT PER FILE!
// create new component, this should produce some html
const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
}

// make sure it gets put into the DOM (we latch on to a specific element)
ReactDOM.render(<App />, document.querySelector('.container'));