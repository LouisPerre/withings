import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import "./main.css";
import { NextUIProvider } from '@nextui-org/react';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
	<NextUIProvider>
		<main className="dark text-foreground bg-background">
			<App />
		</main>
	</NextUIProvider>
);
