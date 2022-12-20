import * as fs from 'node:fs';

const rename = async () => {
	const errOperationFailed = new Error('FS operation failed');
	const src = new URL('files\\', import.meta.url);
	const oldName = new URL('wrongFilename.txt', src);
	const newName = new URL('properFilename.md', src);
	
	fs.access(newName, fs.constants.F_OK, (err) => {
		if (err) {
			if (err.code === 'ENOENT') {
				fs.rename(oldName, newName, (err) => {
					if (err) {
						if (err.code === 'ENOENT') {
							throw errOperationFailed;
						}

						throw err;
					}
				});
			} else {
				throw err; 
			}
		} else {
			throw errOperationFailed;
		}
	});
};

await rename();