import React, { useState, useEffect } from 'react';
import { Input, Select, SelectItem, Button } from '@nextui-org/react';

const StartGame = (props) => {

	return (
		<div className='flex flex-col gap-4'>
			<div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
				<Input 
					type='number'
					label='How many questions?'
					placeholder='5'
					defaultValue="5"
				/>
				<Select
					label="Difficulty"
					placeholder='Select a difficulity'
					defaultSelectedKeys="michel"
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
					<SelectItem key="michel" value="michel">
						All
					</SelectItem>
				</Select>
				<Button color="success" className='w-full'>
					Let's go
				</Button>
			</div>
		</div>
	)
}

export default StartGame;