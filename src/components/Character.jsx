import React, { Component } from "react";
import Name from "./Name";
import Quote from "./Quote";
// import Image from "./Image";
import Delete from "./Delete";

class Character extends Component {
	render() {
		const { character, image, quote, id, liked } = this.props.item;
		const { onLikeToggle, onDelete } = this.props;

		return (
			<>
				<Name
					character={character}
					liked={liked}
					onLikeToggle={onLikeToggle}
					id={id}
				/>

				<Quote quote={quote} />
				{/* <Image image={image} like={liked} /> */}
				<Delete onDelete={onDelete} id={id} />
			</>
		);
	}
}

export default Character;
