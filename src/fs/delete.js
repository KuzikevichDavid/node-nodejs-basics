import { rm } from "fs"

const remove = async () => {
	const errOperationFailed = new Error("FS operation failed");
	const path = new URL("files/fileToRemove.txt", import.meta.url);
	
    rm (path, (err) => {
		if (err) throw errOperationFailed;
	});
};

await remove();