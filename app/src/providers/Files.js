import fs from 'fs';
import homeDir from 'user-home';
class Files {
    static get_userhome() {
        return homeDir;
    }
    static create_new_folder(path = '', folderName) {
        return new Promise((resolve, reject) => {
            path = '' || this.get_userhome();
            let tmpDir = `${path}\\${folderName}`;
            if (!fs.existsSync(tmpDir)) {
                fs.mkdir(tmpDir);
                resolve({ success: true, msg: `สร้าง Folder ${folderName} ไฟล์สำเร็จ` });
            } else {
                reject({ success: false, msg: 'มี Folder อยู่แล้ว' });
            }
        });
    }
    static copy_file(target, src) {
        return new Promise((resolve, reject) => {
            fs.readFile(target, function (err, data) {
                if (err) {
                    fs.writeFileSync(target, fs.readFileSync(src));
                    resolve({ success: true, msg: 'Copy ไฟล์สำเร็จ' });
                } else {
                    reject({ success: false, msg: 'มีไฟล์อยู่แล้ว' });
                }
            });
        });
    }
}
export default Files;