import { Worker } from 'node:worker_threads'
import { cpus } from 'node:os'

const performCalculations = async () => {
    const path = new URL('worker.js', import.meta.url);
    const workersCount = cpus().length;
    let workersCompleted = 0;
    const result = [];
    for (let i = 0; i < workersCount; i++) {
        const worker = new Worker(path);
        worker.on('message', (message) => {
            result[i] = { status: 'resolved', data: message };
        }).on('error', (err) => {
            result[i] = { status: 'error', data: err };
        }).on('exit', (code) => {
            workersCompleted++;
            if (workersCompleted == workersCount) console.log(result);
        });
        worker.postMessage(i + 10);
    }
};

await performCalculations();