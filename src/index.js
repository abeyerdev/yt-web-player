import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search-bar';
import VideoDetail from './components/video-detail';
import VideoList from './components/video-list';
import YTSearch from 'youtube-api-search';

// fetching data in the most parent component we have
const API_KEY = 'AIzaSyBpBcjaVlCzI3FELyF5hRW31Vza1LG5GJU';

// ALWAYS ONE COMPONENT PER FILE!
// create new component, this should produce some html
class App extends Component {

    constructor(props) {
        super(props);
        this.state = { videos: [], selectedVideo: null };        

        this.videoSearch('surfboards');
    }

    videoSearch(term) {
        YTSearch({ key: API_KEY, term: term }, results => {
                    this.setState({ videos: results, selectedVideo: results[0] })
                });
    }

    render() {
        // limit searching to once every 300ms by debouncing function via lodash
        const videoSearch = _.debounce((term) => {
            this.videoSearch(term)
        }, 300);

        return (
            <div>
                <SearchBar onSearchTermChange={ videoSearch }/>
                <VideoDetail video={ this.state.selectedVideo } />
                <VideoList 
                    onVideoSelect={ selectedVideo => this.setState({selectedVideo}) } 
                    videos={ this.state.videos } />
            </div>
        );
    }    
}

// make sure it gets put into the DOM (we latch on to a specific element)
ReactDOM.render(<App />, document.querySelector('.container'));