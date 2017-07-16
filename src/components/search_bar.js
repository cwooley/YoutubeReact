import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {

    super(props);
    // when user updates the search bar this term will get updated.
    this.state = { term: ''};

  }

  render() {
    //update state
    //use set state everywhere besides constructor!!
    return (
      <div className="search-bar">
        <input
        value={this.state.term}
        onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }

}


export default SearchBar;
