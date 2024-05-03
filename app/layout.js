import { Inter } from 'next/font/google';
import './globals.css';

import { Navbar } from '@/components';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'CRUD - MongoDB',
	description: 'A simple CRUD app using MongoDB and Next.js',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<div className="max-w-3xl mx-auto p-4">
					<Navbar />
					{children}
				</div>
			</body>
		</html>
	);
}
