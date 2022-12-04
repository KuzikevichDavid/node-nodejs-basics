import { mkdir, readdir, copyFile } from 'node:fs'

const copy = async () => {
	const errOperationFailed = new Error('FS operation failed');
	const dest = new URL('files_copy\\', import.meta.url);
	const src = new URL('files\\', import.meta.url);
	
	mkdir(dest, (err) => {
		if (err) {
			if (err.code === 'EEXIST') {
				throw errOperationFailed;
			}

			throw err;
		}
	});
	
	readdir(src, (err, files) => {
		if (err) {
			if (err.code === 'ENOENT') {
				throw errOperationFailed;
			}

			throw err;
		}
		
		files.forEach(file => {
			copyFile(new URL(file, src) , new URL(file, dest), (err) => {
				if (err) throw err;
			}); 
		});
	});
};

copy();