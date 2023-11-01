import React, { useState, useEffect } from 'react';

const Question = (props) => {
	const [selected, setSelected] = useState(null) // TODO select an answer
	const [answers, setAnswers] = useState([])
	const [score, setScore] = useState(0)
	const [maxScore, setMaxScore] = useState(0)
	const [scoreQuestion, setScoreQuestion] = useState(1)
	const [activeDiv, setActiveDiv] = useState(null)
	const [correctSelect, setCorrectSelect] = useState(null)

	const shuffleArray = (array) => {
		const shuffledArray = [...array];
		for (let i = shuffledArray.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]]
		}

		return shuffledArray
	}

	const handleClick = (event) => {
		// TODO check answer selected and call next question
		// TODO highlight good answer
		if (event.currentTarget.innerHTML === 'validate') {
			const isCorrect = selected === props.question.correctAnswer

			if (isCorrect) {
				setScore(score + scoreQuestion)
			}
	
			const divWithCorrectAnswer = document.querySelector(`.answer[data-answer='${props.question.correctAnswer}']`);
			if (divWithCorrectAnswer) {
				divWithCorrectAnswer.classList.add("correct");
				setCorrectSelect(true)
			}
	
			const divSelected = document.querySelector(`.answer[data-answer='${selected}']`);
			if (divSelected) {
				  divSelected.classList.add(isCorrect ? "correct" : "incorrect");
				  setCorrectSelect(false)
			}
		} else if (event.currentTarget.innerHTML === 'next') {
			props.nextQuestion(score, maxScore)
		}
		
	};

	const handleSelection = (answer ,divId) => {
		setActiveDiv(divId)
		setSelected(answer)
	}

	useEffect(() => {
		setCorrectSelect(null)
		const shuffledAnswers = shuffleArray([...props.question.incorrectAnswers, props.question.correctAnswer])
		// setAnswers([]);
		setAnswers(shuffledAnswers);
		if (props.question.difficulty === 'easy' || props.question.difficulty === 'medium') {
			setScoreQuestion(1)
			setMaxScore((prevMaxScore) => prevMaxScore + 1)
		} else {
			setScoreQuestion(2)
			setMaxScore((prevMaxScore) => prevMaxScore + 2)
		}
		// setAnswers(newShuffledArray)
		// TODO reset when question change
		setActiveDiv(null)
		setCorrectSelect(null)
	}, [props.question]);

	return (
		<div className="question-container">
			<div className="question-category">{props.question.category} - {scoreQuestion}</div>
			<div className='question-title'>{props.question.question.text}</div>
			<div className="question-answers">
				{
					answers.map((answer, index) => (
						<div className={`answer ${activeDiv === index ? 'selected' : ''}`} data-answer={answer} key={answer} onClick={() => handleSelection(answer, index)}>
							{answer}
						</div>
					))
				}
			</div>
			<div onClick={handleClick} className={`question-submit ${activeDiv !== null ? '' : 'disabled'}`}>{correctSelect !== null ? 'next' : 'validate'}</div>
		</div>
	)
}

export default Question;