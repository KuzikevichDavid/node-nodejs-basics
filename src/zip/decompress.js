import { createReadStream, createWriteStream } from 'node:fs'
import { pipeline } from 'node:stream/promises'
import { createGunzip } from 'node:zlib'

const decompress = async () => {
	const src = new URL('files/archive.gz', import.meta.url);
	const dest = new URL('files/fileToCompress.txt', import.meta.url);

	pipeline(
		createReadStream(src),
		createGunzip(),
		createWriteStream(dest)
	); 
};

await decompress();