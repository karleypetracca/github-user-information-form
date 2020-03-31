import React, { useState } from "react";
import axios from "axios";
import "./Form.css";

const Form = props => {
	const [username, setUsername] = useState("");

	const handleSubmit = event => {
		event.preventDefault();

		axios.get(`https://api.github.com/users/${username}`).then(response => {
			props.onSubmit(response.data);
			setUsername(""); //refreshes setUsername state?
		});
	};

	const handleChange = event => {
		setUsername(event.target.value);
	};

	return (
		<form onSubmit={handleSubmit} className="form">
			<input
				type="text"
				value={username}
				onChange={handleChange}
				placeholder="Type GitHub Username"
				required
				className="input"
			/>
			<button type="submit" className="button submit">
				Add card
			</button>
		</form>
	);
};

export default Form;
