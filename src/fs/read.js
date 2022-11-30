import { readFile } from "fs"

const read = async () => {
	const errOperationFailed = new Error("FS operation failed");
	const path = new URL("files/fileToRead.txt", import.meta.url);
    readFile(path, (err, dataBuffer) => {
		if (err) {
			if (err.code === 'ENOENT') {
				throw errOperationFailed;
			}

			throw err;
		}
		console.log(dataBuffer.toString());
	});
};

await read();