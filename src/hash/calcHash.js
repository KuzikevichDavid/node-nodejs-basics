import { readFile } from 'node:fs'
import { createHash } from 'node:crypto'

const calculateHash = async () => {
	const path = new URL('files/fileToCalculateHashFor.txt', import.meta.url);
    readFile(path, (err, dataBuffer) => {
		if (err) throw err;

		const hash = createHash('sha256');
		hash.update(dataBuffer);
		console.log(hash.digest('hex'));
	});
};

await calculateHash();