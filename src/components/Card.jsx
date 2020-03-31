import React from "react";
import "./Card.css";

const Card = props => {
	return (
		<div className="card">
			<div className="cardImg">
				<img alt="avatar" src={props.avatar_url} />
			</div>
			<div className="cardText">
				<b>{props.name}</b>
				<p>{props.blog}</p>
			</div>
		</div>
	);
};

export default Card;
