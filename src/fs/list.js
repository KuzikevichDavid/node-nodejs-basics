import { readdir } from "fs"

const list = async () => {
	const errOperationFailed = new Error("FS operation failed");
	const src = new URL("files\\", import.meta.url);
	
	readdir(src, (err, files) => {
		if (err) throw errOperationFailed;
		files.forEach(file => {
			console.log(file);
		});
	});
};

await list();