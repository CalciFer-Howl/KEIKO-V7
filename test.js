import _0x37211f from 'fs';
import _0x1c0b07, { dirname } from 'path';
import _0x1f9567 from 'assert';
import 'child_process';
import _0xa15bf4 from 'syntax-error';
import { fileURLToPath } from 'url';
import { createRequire } from 'module';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const require = createRequire(__dirname);
let folders = ['.', ...Object.keys(require(_0x1c0b07.join(__dirname, "./package.json")).directories)];
let files = [];
for (let folder of folders) for (let file of _0x37211f.readdirSync(folder).filter(_0xacfbbe => _0xacfbbe.endsWith(".js"))) files.push(_0x1c0b07.resolve(_0x1c0b07.join(folder, file)));
for (let file of files) {
  if (file == __filename) {
    continue;
  }
  console.error('Checking', file);
  const error = _0xa15bf4(_0x37211f.readFileSync(file, "utf8"), file, {
    'sourceType': "module",
    'allowReturnOutsideFunction': true,
    'allowAwaitOutsideFunction': true
  });
  if (error) {
    _0x1f9567.ok(error.length < 0x1, file + "\n\n" + error);
  }
  _0x1f9567.ok(file);
  console.log("Done", file);
}