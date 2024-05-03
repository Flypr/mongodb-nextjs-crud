import React from 'react';

const AddTopic = () => {
	return (
		<form className="flex flex-col items-start gap-4 p-6 rounded-2xl bg-slate-100 mt-4 border border-slate-200 shadow-lg shadow-slate-100">
			<h2 className="text-2xl font-bold text-slate-800">Create Topic</h2>
			<div className="w-full h-[1px] bg-slate-300"></div>
			<input
				type="text"
				placeholder="Topic Title"
				className="w-full px-4 py-2 rounded-lg border border-slate-200 bg-slate-50 placeholder:text-slate-400 text-slate-800"
			/>
			<textarea
				type="text"
				placeholder="Topic Description"
				className="w-full px-4 py-2 rounded-lg border border-slate-200 bg-slate-50 placeholder:text-slate-400 text-slate-800"
			/>
			<button className="bg-slate-800 text-slate-50 hover:bg-emerald-400 px-4 py-2 rounded-lg font-semibold transition-colors duration-200">
				Add Topic
			</button>
		</form>
	);
};

export default AddTopic;
