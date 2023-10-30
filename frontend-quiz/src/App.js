import React, { useState, useEffect } from 'react';

import Question from './Question';
import axios from 'axios';
import StartGame from './StartGame';

const App = () => {
	const [questions, setQuestions] = useState([]);
	const [currentQuestion, setCurrentQuestion] = useState(null);
	const [index, setIndex] = useState(0);
	const [isLoading, setIsLoading] = useState(true);
	const [score, setScore] = useState(0)
	const [maxScore, setMaxScore] = useState(0)
	
	const fetchQuestions = async () => {
		const response = await axios.get('https://the-trivia-api.com/api/questions?limit=5')
						.then(response => {
							return response.data
						})
						.catch(error => {
							console.error(error)
						})
		setQuestions(response) // TODO keep questions from the API
		setCurrentQuestion(response[index]) // TODO get the first question to display it
		setIsLoading(false)
	};

	const nextQuestion = (score, maxScore) => {
		// TODO : update score and go to next question
		setScore(score)
		setMaxScore(maxScore)
		setIndex((prevIndex) => prevIndex + 1)
		setCurrentQuestion(questions[index + 1])
	}

	useEffect(() => {
		fetchQuestions();
	}, [])

	return(
		// <div className="App">
		// 	{ isLoading ? (
		// 		<p>Loading ...</p>
		// 	) : index !== questions.length ? (
		// 		<>
		// 			<div className="App-header">
		// 				<h1>Quiz - Question { index + 1}/5</h1>
		// 			</div>

		// 			<div className="App-content">
		// 				<Question 
		// 					question={currentQuestion}
		// 					nextQuestion={nextQuestion}
		// 				/>
		// 			</div>
		// 		</>
		// 	) : (
		// 		<>
		// 			<div className="App-header">
		// 				<h1>Quiz - End</h1>
		// 			</div>

		// 			<div className="App-content">
		// 				<div className="finish-screen">
		// 					<p className="label">Your score / Maximum score</p>
		// 					<p className="score">{score} / {maxScore}</p>
		// 					<div className="btn-retry" onClick={() => window.location.reload()}>Retry quiz?</div>
		// 				</div>
		// 			</div>
		// 		</>
		// 	)}
			
		// </div> 
		<div className="App">
			<StartGame />
		</div>
	);
}

export default App;