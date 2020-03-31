import React, { useState } from "react";
import Header from "./components/Header.jsx";
import Form from "./components/Form.jsx";
import CardList from "./components/CardList.jsx";
import "./App.css";

const App = () => {
	const [cards, setCards] = useState([]); //hook

	const addNewCard = cardInfo => {
		setCards(cards.concat(cardInfo));
	};

	return (
		<>
			<Header />
			<div className="App">
				<Form onSubmit={addNewCard} />
				<CardList cards={cards} />
			</div>
		</>
	);
};

export default App;
