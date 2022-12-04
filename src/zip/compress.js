import { createReadStream, createWriteStream } from 'node:fs'
import { pipeline } from 'node:stream'
import { createGzip } from 'node:zlib'

const compress = async () => {
	const src = new URL('files/fileToCompress.txt', import.meta.url);
	const dest = new URL('files/archive.gz', import.meta.url);

	pipeline(
		createReadStream(src),
		createGzip(),
		createWriteStream(dest),
		(err) => {
			if (err) throw err;
		}
	);
};

await compress();