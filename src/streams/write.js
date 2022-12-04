import { createWriteStream } from 'node:fs'
import { stdin } from 'node:process'

const write = async () => {
	const path = new URL('files/fileToWrite.txt', import.meta.url);
	const writable = createWriteStream(path);

	console.log('To terminate, use Ctrl+C combination');
	stdin.pipe(writable);
};

await write();