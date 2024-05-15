import React from 'react';
import RemoveBtn from './RemoveBtn';
import Link from 'next/link';

import { HiPencilAlt } from 'react-icons/hi';

const TopicsList = async () => {
	const getTopics = async () => {
		try {
			const res = await fetch('http://localhost:3000/api/topics', {
				cache: 'no-store',
			});

			if (!res.ok) {
				throw new Error('Failed to fetch topics');
			}

			const data = await res.json();
			return { topics: data };
		} catch (error) {
			console.log('Error loading topics: ', error);
			return { topics: [] };
		}
	};

	const { topics } = await getTopics();

	return (
		<>
			{topics.map((topic) => (
				<div
					key={topic._id}
					className="flex flex-col gap-4 p-6 rounded-2xl bg-slate-100 mt-4 border border-slate-200 shadow-lg shadow-slate-100"
				>
					<div className="flex justify-between items-center">
						<h2 className="text-2xl font-bold text-slate-800">{topic.title}</h2>
						<div className="flex gap-2">
							<RemoveBtn />
							<Link href={`/editTopic/${topic._id}`}>
								<HiPencilAlt
									size={24}
									className="text-slate-600 hover:text-slate-800 transition-colors duration-150"
								/>
							</Link>
						</div>
					</div>
					<div className="w-full h-[1px] bg-slate-300"></div>
					<p className="text-slate-600">{topic.description}</p>
				</div>
			))}
		</>
	);
};

export default TopicsList;
