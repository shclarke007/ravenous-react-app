import React, { Component } from 'react';
import './App.css';
import BusinessList from './components/BusinessList/BusinessList';
import SearchBar from './components/SearchBar/SearchBar';

const business = {
  imageSrc:
    'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
  name: 'MarginOtto Pizzeria',
  address: '1010 Paddington Way',
  city: 'London',
  postCode: 'SE8 3EN',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90
};

const businesses = [business, business, business, business, business, business];

class App extends Component {
  render() {
    return (
        <div className='App'>
        <h1>Ravenous Food House</h1>
          <SearchBar />
          <BusinessList businesses={businesses}/>
        </div>
    );
  }
}

export default App;
