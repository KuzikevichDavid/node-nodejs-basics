import { rm } from 'node:fs'

const remove = async () => {
	const errOperationFailed = new Error('FS operation failed');
	const path = new URL('files/fileToRemove.txt', import.meta.url);
	
    rm (path, (err) => {
		if (err) {
			if (err.code === 'ENOENT') {
				throw errOperationFailed;
			}

			throw err;
		}
	});
};

await remove();