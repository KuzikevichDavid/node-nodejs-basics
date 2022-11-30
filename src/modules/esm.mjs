import { dirname, sep } from 'path'
import { fileURLToPath } from 'url';
import { release, version } from 'os'
import { createServer as createServerHttp } from 'http'
import * as c from './files/c.js'

const random = Math.random();

let unknownObject;

if (random > 0.5) {
	unknownObject = import('./files/a.json', { assert: { type: 'json' } });
} else {
	unknownObject =  import('./files/b.json', { assert: { type: 'json' } }); 
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${fileURLToPath(import.meta.url)}`);
console.log(`Path to current directory is ${dirname(fileURLToPath(import.meta.url))}`);

const myServer = createServerHttp((_, res) => {
	res.end('Request accepted');
});

const PORT = 3000;

console.log(unknownObject.toString());

myServer.listen(PORT, () => {
	console.log(`Server is listening on port ${PORT}`);
	console.log('To terminate it, use Ctrl+C combination');
});

export { unknownObject, myServer };