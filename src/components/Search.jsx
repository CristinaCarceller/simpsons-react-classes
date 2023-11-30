import React, { Component } from "react";

class Search extends Component {
	render() {
		return <input onImput={this.props.onSearchInput()} type="text"></input>;
	}
}

export default Search;
