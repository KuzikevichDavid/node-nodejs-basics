import { spawn } from 'child_process'
import { fileURLToPath } from 'url'

const spawnChildProcess = async (args) => {
	const path = new URL("files/script.js", import.meta.url);
	const jsScript = spawn('node', [`${fileURLToPath(path)}`, '--propName', 'value']);
	
	process.stdin.pipe(jsScript.stdin);
	jsScript.stdout.pipe(process.stdout);
	console.log('To terminate, type "CLOSE"');
};

spawnChildProcess();