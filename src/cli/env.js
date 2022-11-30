import { env } from 'process'

const parseEnv = () => {
    Object.keys(env).forEach((key) => {
		if (key.toString().startsWith('RSS_')) {
			console.log(`${key}=${env[key]}`);
		}
	});
};

parseEnv();