import React, { useState, useEffect } from 'react';
import { Input, Select, SelectItem, Button, Avatar } from '@nextui-org/react';

const StartGame = (props) => {
	const [numberOfQuestion, setNumberOfQuestion] = useState('5');
	const [difficulty, setDifficulty] = useState(new Set(["allKey"]))
	const [categories, setCategories] = useState(new Set([]))

	const handleClick = () => {
		props.handleStart(numberOfQuestion, difficulty, categories)
	}

	return (
		<div className='flex flex-col gap-4'>
			<div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
				<Input 
					type='number'
					label='How many questions?'
					placeholder='5'
					defaultValue="5"
					value={numberOfQuestion}
					onValueChange={setNumberOfQuestion}
					max="50"
					min="1"
				/>
				<Select
					label="Difficulty"
					placeholder='Select a difficulty'
					defaultSelectedKeys="allKey"
					onSelectionChange={setDifficulty}
					selectedKeys={difficulty}
				>
					<SelectItem key="easy" value="easy">
						Easy
					</SelectItem>
					<SelectItem key="medium" value="medium">
						Medium
					</SelectItem>
					<SelectItem key="hard" value="hard">
						Hard
					</SelectItem>
					<SelectItem key="allKey" value="allKey">
						All
					</SelectItem>
				</Select>
				<Select
					label="Category"
					placeholder='Select a category'
					onSelectionChange={setCategories}
					selectedKeys={categories}
					selectionMode='multiple'
				>
					<SelectItem key="music" textValue='Music'>
						<div className="flex gap-2 items-center">
							<Avatar  name="🎧"/>
							<div className='flex flex-col'>
								<span className='text-small'>Music</span>
							</div>
						</div>
					</SelectItem>
					<SelectItem key="sport_and_leisure" textValue='Sport and leisure'>
						<div className="flex gap-2 items-center">
							<Avatar  name="💪"/>
							<div className='flex flex-col'>
								<span className='text-small'>Sport and Leisure</span>
							</div>
						</div>
					</SelectItem>
					<SelectItem key="film_and_tv" textValue='Film and tv'>
						<div className="flex gap-2 items-center">
							<Avatar  name="🎬"/>
							<div className='flex flex-col'>
								<span className='text-small'>Film and tv</span>
							</div>
						</div>
					</SelectItem>
					<SelectItem key="arts_and_literature" textValue='Arts and literature'>
						<div className="flex gap-2 items-center">
							<Avatar  name="🎭"/>
							<div className='flex flex-col'>
								<span className='text-small'>Arts and literature</span>
							</div>
						</div>
					</SelectItem>
					<SelectItem key="history" textValue='History'>
						<div className="flex gap-2 items-center">
							<Avatar  name="🏛️"/>
							<div className='flex flex-col'>
								<span className='text-small'>History</span>
							</div>
						</div>
					</SelectItem>
					<SelectItem key="society_and_culture" textValue='Society and culture'>
						<div className="flex gap-2 items-center">
							<Avatar  name="📚"/>
							<div className='flex flex-col'>
								<span className='text-small'>Society and culture</span>
							</div>
						</div>
					</SelectItem>
					<SelectItem key="science" textValue='Science'>
						<div className="flex gap-2 items-center">
							<Avatar  name="🔬"/>
							<div className='flex flex-col'>
								<span className='text-small'>Science</span>
							</div>
						</div>
					</SelectItem>
					<SelectItem key="geography" textValue='Geography'>
						<div className="flex gap-2 items-center">
							<Avatar  name="🌍"/>
							<div className='flex flex-col'>
								<span className='text-small'>Geography</span>
							</div>
						</div>
					</SelectItem>
					<SelectItem key="food_and_drink" textValue='Food and drink'>
						<div className="flex gap-2 items-center">
							<Avatar  name="🍔"/>
							<div className='flex flex-col'>
								<span className='text-small'>Food and drink</span>
							</div>
						</div>
					</SelectItem>
					<SelectItem key="general_knowledge" textValue='General knowledge'>
						<div className="flex gap-2 items-center">
							<Avatar  name="🧠"/>
							<div className='flex flex-col'>
								<span className='text-small'>General knowledge</span>
							</div>
						</div>
					</SelectItem>
				</Select>
				<Button color="success" className='w-full' onClick={handleClick}>
					Let's go
				</Button>
			</div>
		</div>
	)
}

export default StartGame;