import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBw6M0Eg3PB63YMtUn319JKVSmoT2BSZVY';


const App = function(){
    return(
    <div>
        <SearchBar />
    </div>
    );
}

ReactDOM.render(<App />, document.querySelector('.container') )