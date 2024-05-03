import React from 'react';
import RemoveBtn from './RemoveBtn';
import Link from 'next/link';

import { HiPencilAlt } from 'react-icons/hi';

const TopicsList = () => {
	return (
		<>
			<div className="flex flex-col gap-4 p-6 rounded-2xl bg-slate-100 mt-4 border border-slate-200 shadow-lg shadow-slate-100">
				<div className="flex justify-between items-center">
					<h2 className="text-2xl font-bold text-slate-800">Topic Title</h2>
					<div className="flex gap-2">
						<RemoveBtn />
						<Link href={'/editTopic/123'}>
							<HiPencilAlt
								size={24}
								className="text-slate-600 hover:text-slate-800 transition-colors duration-150"
							/>
						</Link>
					</div>
				</div>
				<div className="w-full h-[1px] bg-slate-300"></div>
				<p className="text-slate-600">Topic description</p>
			</div>
		</>
	);
};

export default TopicsList;
