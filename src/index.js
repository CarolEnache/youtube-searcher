import React from 'react';
import ReactDOM from 'react-dom';
import YTsearch from 'youtube-api-search';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBw6M0Eg3PB63YMtUn319JKVSmoT2BSZVY';

YTsearch({key: API_KEY, term: 'surfboards'}, function(data){ console.log(data);})

const App = () => {
    return(
    <div>
        <SearchBar />
    </div>
    );
}

ReactDOM.render(<App />, document.querySelector('.container') )