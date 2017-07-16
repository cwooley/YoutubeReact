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
      <div>
        <input
        value={this.state.term}
        onChange={event => this.setState({term: event.target.value})} />
      </div>
    );
  }

}


export default SearchBar;
