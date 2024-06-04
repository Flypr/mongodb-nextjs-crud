'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { UploadFile } from '@/libs/actions';

const AddTopic = () => {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [fileContent, setFileContent] = useState('');

	const router = useRouter();

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!title || !description) {
			alert('Please fill in all fields');
			return;
		}

		try {
			const res = await fetch('http://localhost:3000/api/topics', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ title, description }),
			});

			if (res.ok) {
				router.push('/');
				router.refresh();
			} else {
				throw new Error('Failed to create topic');
			}
		} catch (error) {
			console.log('Error creating topic: ', error);
		}
	};

	return (
		<>
			<form
				className="flex flex-col items-start gap-4 p-6 rounded-2xl bg-slate-100 mt-4 border border-slate-200 shadow-lg shadow-slate-100"
				onSubmit={handleSubmit}
			>
				<h2 className="text-2xl font-bold text-slate-800">Create Topic</h2>
				<div className="w-full h-[1px] bg-slate-300"></div>
				<input
					type="text"
					placeholder="Topic Title"
					className="w-full px-4 py-2 rounded-lg border border-slate-200 bg-slate-50 placeholder:text-slate-400 text-slate-800"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
				<textarea
					type="text"
					placeholder="Topic Description"
					className="w-full px-4 py-2 rounded-lg border border-slate-200 bg-slate-50 placeholder:text-slate-400 text-slate-800"
					value={description}
					onChange={(e) => setDescription(e.target.value)}
				/>
				<button
					type="submit"
					className="bg-slate-800 text-slate-50 hover:bg-emerald-400 px-4 py-2 rounded-lg font-semibold transition-colors duration-200"
				>
					Add Topic
				</button>
			</form>

			<form
				className="flex flex-col items-start gap-4 p-6 rounded-2xl bg-slate-100 mt-4 border border-slate-200 shadow-lg shadow-slate-100 mt-12"
				action={UploadFile}
			>
				<input
					type="file"
					name="file"
					className="w-full px-4 py-2 rounded-lg border border-slate-200 bg-slate-50 placeholder:text-slate-400 text-slate-800"
					onChange={(e) => setFileContent(e.target.value)}
				/>
				<div>{fileContent}</div>
				<button
					type="submit"
					className="bg-slate-800 text-slate-50 hover:bg-emerald-400 px-4 py-2 rounded-lg font-semibold transition-colors duration-200"
				>
					Upload
				</button>
			</form>
		</>
	);
};

export default AddTopic;
