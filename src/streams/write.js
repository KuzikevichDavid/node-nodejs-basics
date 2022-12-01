import { createWriteStream } from 'fs'
import { stdin } from 'process'

const write = async () => {
	const path = new URL("files/fileToWrite.txt", import.meta.url);
	const writable = createWriteStream(path);
	stdin.pipe(writable);
	console.log('To terminate, use Ctrl+C combination');
};

await write();