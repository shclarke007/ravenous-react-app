import React, { Component } from 'react';
import './SearchBar.css';

const sortByOptions = {
  'Best Match': 'best_match',
  'Highest Rated': 'rating',
  'Most Reviewed': 'review_count'
};

class SearchBar extends Component {
  constructor(props){
    super(props)
    this.state = { 
      term: '', 
      location: '', 
      sortBy: 'best_match' 
    }; 
    this.handleSortByChange = this.handleSortByChange.bind(this);           
  }

  getSortByClass(sortByOption) {
    if(sortByOption === this.state.sortBy){
      return 'active'
    }
    return ''; 
  }

  handleSortByChange(sortByOption){
    this.setState({sortBy: sortByOption});
  }

  renderSortByOptions() {
    return Object.keys(sortByOptions).map(sortByOption => {
      let sortByOptionValue = sortByOptions[sortByOption];
      return <li key={sortByOptionValue} onClick={this.handleSortByChange.bind(this, sortByOptionValue)} className={this.getSortByClass(sortByOptionValue)}>{sortByOption}</li>;
    });
  }

  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>{this.renderSortByOptions()}</ul>
        </div>
        <div className="SearchBar-fields">
          <input placeholder="Search Businesses" />
          <input placeholder="Where?" />
        </div>
        <div className="SearchBar-submit">
          <a>Let's Go</a>
        </div>
      </div>
    );
  }
}

export default SearchBar;
