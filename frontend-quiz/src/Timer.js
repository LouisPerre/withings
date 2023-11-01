import React, {useState, useEffect} from 'react';

const Timer = (props) => {
	const maxMinutes = props.time
	const maxTotalSeconds = maxMinutes * 60
	const [totalSeconds, setTotalSeconds] = useState(maxTotalSeconds)
	

	useEffect(() => {
		const intervalId = setInterval(() => {
			if ( totalSeconds > 0) {
				setTotalSeconds(totalSeconds - 1)
			} else {
				clearInterval(intervalId)
				props.endTimer()
			}
		}, 1000)

		return () => {
			clearInterval(intervalId)
		}
	}, [totalSeconds])

	const minutes = Math.floor(totalSeconds / 60)
	const seconds = totalSeconds % 60

	return (
		<p>{String(minutes).padStart(2, '0')} : {String(seconds).padStart(2, '0')}</p>
	)
}

export default Timer;