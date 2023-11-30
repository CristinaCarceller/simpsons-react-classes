import React, { Component } from "react";
import axios from "axios";
// import Loading from "./components/Loading";
import Simpsons from "./components/Simpsons";

class App extends Component {
	state = {};
	async componentDidMount() {
		const { data } = await axios.get(
			"https://thesimpsonsquoteapi.glitch.me/quotes?count=50"
		);
		// make a unique id for each item in the API
		data.forEach((element, index) => {
			element.id = index + Math.random();
		});
		this.setState({ simpsons: data });
	}

	onDelete = (id) => {
		const indexOf = this.state.simpsons.findIndex((char) => {
			return char.id === id;
		});
		const simpsons = [...this.state.simpsons];
		simpsons.splice(indexOf, 1);
		this.setState({ simpsons });
	};

	onLikeToggle = (id) => {
		const indexOf = this.state.simpsons.findIndex((char) => {
			return char.id === id;
		});
		const simpsons = [...this.state.simpsons];
		//invert if liked or not liked
		simpsons[indexOf].liked = !simpsons[indexOf].liked;
		this.setState({ simpsons });
	};

	render() {
		const { simpsons } = this.state;
		if (!simpsons) return <p>Loading...</p>;
		if (simpsons.length === 0) return <p>You delete everything!</p>;

		//calculate the no of likes
		let total = 0;
		simpsons.forEach((char) => {
			if (char.liked) return total++;
		});

		return (
			<>
				<h1>No Liked #{total}</h1>
				<Simpsons
					simpsons={simpsons}
					onDelete={this.onDelete}
					onLikeToggle={this.onLikeToggle}
				/>
			</>
		);
	}
}

export default App;
