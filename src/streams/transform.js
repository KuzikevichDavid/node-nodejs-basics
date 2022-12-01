import { Transform } from 'stream'
import { stdin, stdout } from 'process'

const transform = async () => {	
    const reverseable = new Transform({
        transform (data, encoding, callback) {
            const reversedData = data.toString().split("").reverse().join("");
            this.push(reversedData);
            callback();
        }
    });
	
	console.log('To terminate, use Ctrl+C combination');
	stdin.pipe(reverseable).pipe(stdout);
};

await transform();