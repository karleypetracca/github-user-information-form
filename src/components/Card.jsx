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
				<a
					href={
						props.blog.toString().slice(0, 4) === "http"
							? props.blog
							: "https://" + props.blog
					}
					target="_blank"
				>
					<p>{props.blog}</p>
				</a>
			</div>
		</div>
	);
};

export default Card;
