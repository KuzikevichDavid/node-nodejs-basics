import { createReadStream, createWriteStream } from 'fs'
import { pipeline } from 'stream/promises'
import { createGunzip } from 'zlib'

const decompress = async () => {
	const src = new URL("files/archive.gz", import.meta.url);
	const dest = new URL("files/fileToCompress.txt", import.meta.url);

	pipeline(
		createReadStream(src),
		createGunzip(),
		createWriteStream(dest),/* 
		(err) => {
			if (err) {
				console.error('Pipeline failed.', err);
			} else {
				console.log('Pipeline succeeded.');
			}
		} */
	); 
};

await decompress();