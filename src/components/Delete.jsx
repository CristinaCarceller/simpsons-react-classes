import React, { Component } from "react";

class Delete extends Component {
	render() {
		return (
			<button
				onClick={() => {
					this.props.onDelete(this.props.id);
				}}>
				Delete
			</button>
		);
	}
}

export default Delete;
