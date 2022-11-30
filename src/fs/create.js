import { open, close, write } from "fs"
import { Buffer } from 'buffer';

const create = async () => {
	const errOperationFailed = new Error("FS operation failed");
	const path = new URL("files/fresh.txt", import.meta.url);

	const buffer = Buffer.from('I am fresh and young');
	
	
    open(path, 'wx', (err, fd) => {
		if (err) {
			if (err.code === 'EEXIST') {
				throw errOperationFailed;
			}

			throw err;
		}

		try {
			write(fd, buffer, (err, bytesWritten, buf) => {
				if (err) throw err;
			});
		} finally {
			close(fd, (err) => {
				if (err) throw err;
			});
		}
	});
};

await create();