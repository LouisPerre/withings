import React from 'react';

const EndGame = (props) => {

	return (
		<>
			<div className="App-header">
				<h1>Quiz - End</h1>
			</div>

			<div className="App-content">
				<div className="finish-screen">
					<p className="label">Your score / Maximum score</p>
					<p className="score">{props.score} / {props.maxScore}</p>
					<div className="btn-retry" onClick={() => window.location.reload()}>Retry quiz?</div>
				</div>
			</div>
		</>
	)
}

export default EndGame;