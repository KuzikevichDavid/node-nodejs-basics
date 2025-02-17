import { readdir } from 'node:fs'

const list = async () => {
	const errOperationFailed = new Error('FS operation failed');
	const src = new URL('files\\', import.meta.url);
	
	readdir(src, (err, files) => {
		if (err) {
			if (err.code === 'ENOENT') {
				throw errOperationFailed;
			}

			throw err;
		}

		files.forEach(file => {
			console.log(file);
		});
	});
};

await list();