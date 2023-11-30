import React, { Component } from "react";

class Name extends Component {
	render() {
		const { liked, character, onLikeToggle, id } = this.props;
		return (
			<>
				<p>{character}</p>
				<button onClick={() => onLikeToggle(id)}>
					{liked ? "Liked" : "Not Liked"}
				</button>
			</>
		);
	}
}

export default Name;
