import * as fs from 'node:fs';

const rename = async () => {
	const errOperationFailed = new Error('FS operation failed');
	const src = new URL('files\\', import.meta.url);
	const oldName = new URL('wrongFilename.txt', src);
	const newName = new URL('properFilename.md', src);
	
	fs.rename(oldName, newName, (err) => {
		if (err) throw errOperationFailed;
	});
};

await rename();