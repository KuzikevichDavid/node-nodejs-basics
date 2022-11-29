import { cp, mkdir, readdir, copyFile } from "node:fs"

const copy = async () => {
	const errOperationFailed = new Error("FS operation failed");
	const dest = new URL("files_copy\\", import.meta.url);
	const src = new URL("files\\", import.meta.url);
	
	mkdir(dest, { recursive: false }, (err) => {
		if (err) throw errOperationFailed;
	});
	
	readdir(src, (err, files) => {
		files.forEach(file => {
			copyFile(new URL(file, src) , new URL(file, dest), (err) => {
				if (err) throw err;
			}); 
		});
	});
};

copy();