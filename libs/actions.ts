'use server';

import { Storage } from '@google-cloud/storage';

export const UploadFile = async (form: FormData) => {
	try {
		const file = form.get('file') as File;
		console.log(`file: ${file}`);

		if (!file) throw new Error('No file provided');
		if (file.size < 1) throw new Error('File is empty');

		const buffer = await file.arrayBuffer();
		const storage = new Storage();
		await storage.bucket('sketch-ai').file(file.name).save(Buffer.from(buffer));

		return true;
	} catch (error) {
		console.error(error);
		return false;
	}
};
