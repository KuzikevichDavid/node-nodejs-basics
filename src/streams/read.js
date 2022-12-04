import { createReadStream } from 'node:fs'
import { stdout } from 'node:process'

const read = async () => {
	const path = new URL('files/fileToRead.txt', import.meta.url);
	const readable = createReadStream(path);
	readable.pipe(stdout);
};

await read();