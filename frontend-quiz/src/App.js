import React, { useState, useEffect } from 'react';

import Question from './Question';
import axios from 'axios';
import StartGame from './StartGame';
import Loading from './Loading';
import EndGame from './Endgame';
import Timer from './Timer';

const App = () => {
	const [questions, setQuestions] = useState([]);
	const [currentQuestion, setCurrentQuestion] = useState(null);
	const [index, setIndex] = useState(0);
	const [isLoading, setIsLoading] = useState(true);
	const [score, setScore] = useState(0)
	const [maxScore, setMaxScore] = useState(0)
	const [numberOfQuestion, setNumberOfQuestion] = useState(0)
	const [chooseDifficulty, setChooseDifficulty] = useState(['allKey'])
	const [chooseCategories, setChooseCategories] = useState([])
	
	const fetchQuestions = async () => {
		let url = 'https://the-trivia-api.com/v2/questions?limit=' + numberOfQuestion
		if (chooseCategories.length > 0) {
			url += '&categories=' + chooseCategories.join(',')
		}
		if (chooseDifficulty[0] !== 'allKey') {
			url += '&difficulties=' + chooseDifficulty[0]
		}
		const response = await axios.get(url)
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

	const handleStart = (numberOfQuestion, difficulty, categories) => {
		setChooseCategories(Array.from(categories))
		setChooseDifficulty(Array.from(difficulty))
		setNumberOfQuestion(numberOfQuestion)
	}
	
	const endTimer = () => {
		setIndex(questions.length)
	}

	useEffect(() => {
		if (numberOfQuestion !== 0) {
			fetchQuestions();
		}
	}, [numberOfQuestion])

	return(
		<div className="App">
			{ numberOfQuestion == 0 
				? <StartGame handleStart={handleStart}/>
				: isLoading 
					? <Loading />
					: index !== questions.length
						? (
							<>
								<div className="App-header">
									<h1>Quiz - Question { index + 1}/{numberOfQuestion}</h1>
									<Timer time={parseInt(numberOfQuestion)} endTimer={endTimer} />
								</div>

								<div className="App-content">
									<Question 
										question={currentQuestion}
										nextQuestion={nextQuestion}
									/>
								</div>
							</>
						) : (
							<EndGame score={score} maxScore={maxScore} />
						)
			}
			
		</div>
	);
}

export default App;