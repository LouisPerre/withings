import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import "./main.css";
import { NextUIProvider } from '@nextui-org/react';
import FuzzyOverlay from './FuzzyOverlay';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
	<div className='container'>
		<NextUIProvider style={{zIndex: 10}}>
			<main className="text-foreground bg-transparent">
				<App />
			</main>
		</NextUIProvider>
	<FuzzyOverlay />
	</div>
);
