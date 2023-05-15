const fs = require('fs');
const path = require('node:path');
// const { open } = require ('node:fs/promises');


const extensionsToCheck = ['.doc', '.docx', '.xls', '.xlsx', '.zip', '.rar', '.exe'];
const tempFolderPath = path.join(process.env.LOCALAPPDATA, 'Temp');

fs.readdir(tempFolderPath, (err, files) => {
    if (err) {
        console.error(`Error reading directory: ${err}`);
        return;
    }

    files.forEach(file => {
        const ext = path.extname(file);
        const filePath = path.join(tempFolderPath, file);

        if (extensionsToCheck.includes(ext)) {
            fs.unlink(filePath, err => {
                if (err) {
                    console.error(`Error deleting file ${filePath}: ${err}`);
                    return;
                }

                console.log(`Deleted file ${filePath}`);
            });
        }
    });
});
