import React from 'react';
import Link from 'next/link';

const Navbar = () => {
	return (
		<nav className="flex justify-between items-center bg-slate-800 px-8 py-3 rounded-2xl mb-4">
			<Link
				className="text-slate-50 font-bold text-xl"
				href={'/'}
			>
				Home
			</Link>
			<Link
				className="bg-slate-50 px-4 py-2 rounded-lg text-slate-800 font-semibold hover:bg-slate-100 transition-colors duration-200"
				href={'/addTopic'}
			>
				Add Topic
			</Link>
		</nav>
	);
};

export default Navbar;
