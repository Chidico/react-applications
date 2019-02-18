import React, { Component } from 'react';
import './App.css';
import Restaurants from './components/Restaurants.js';
import Directions from './components/Directions.js';
import Gyms from './components/Gyms.js';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      restaurants: []
    };
    this.searchYelp = this.searchYelp.bind(this);
  }

  searchYelp(term, location, sortBy){
    // Yelpsearch(term, location, sortBy).the(restaurants => {
    //   this.setState({restaurants: restaurants});
    // });
  }
  
  render() {
    const name = 'Fela Kuti';
    const element = <h1>Hello, {name}</h1>;
    function formatName(artist) {
      return artist.firstName + ' ' + artist.lastName;
    }

    const artist = {
      firstName: 'Fela',
      lastName: 'Kuti',
    };
    return (
      <div className="App">
       
        <div><h1>This ain't it Foo!</h1>
        <h1> {element} </h1>
        <h1>Hello, {formatName(artist)}</h1>
        <h1>Take A Hike </h1>
        {/* <SearchBar searchYelp={this.searchYelp}/> */}
        <input type="text" className="input" placeholder="Search..." />
        <button type="submit"> Go! </button>
        <ul>
          ...
          </ul>
      </div>
      </div>
    );
  }
}

export default App;
