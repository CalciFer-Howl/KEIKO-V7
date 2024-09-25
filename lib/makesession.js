/*import { fileURLToPath } from 'url'
import path from 'path'
import { writeFileSync } from 'fs'
import { BufferJSON } from '@whiskeysockets/baileys'
import PastebinAPI from 'pastebin-js'
let pastebin = new PastebinAPI('u9SylH2Qa3eW_UQHq1kivWwKUMcajqLk')

async function processTxtAndSaveCredentials(txt) {
  const __filename = fileURLToPath(import.meta.url)
  const __dirname = path.dirname(__filename)

  const pasteId = txt.replace('KeikoV5~', '')

  let decodedData = await pastebin.getPaste(pasteId)

  try {
    const credsPath = path.join(__dirname, '..', 'session', 'creds.json')
    writeFileSync(credsPath, decodedData.toString())
    console.log('Saved credentials to', credsPath)
  } catch (jsonError) {
    console.error('Error parsing JSON:', jsonError)
  }
}

export default processTxtAndSaveCredentials
*/
import { fileURLToPath } from 'url';
import path from 'path';
import { BufferJSON } from '@whiskeysockets/baileys';
import PastebinAPI from 'pastebin-js';
import { upload } from './Mega.js'; // Import the upload function from Mega.js

let pastebin = new PastebinAPI('u9SylH2Qa3eW_UQHq1kivWwKUMcajqLk');

async function processTxtAndSaveCredentials(txt) {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    const pasteId = txt.replace('KeikoV5~', '');

    let decodedData = await pastebin.getPaste(pasteId);

    try {
        // Instead of saving to a local file, we will upload to Mega
        const buffer = Buffer.from(decodedData.toString(), 'utf-8'); // Convert the decoded data to a Buffer
        const url = await upload(buffer, 'creds.json'); // Use the upload function from Mega.js
        console.log('Uploaded credentials to Mega:', url);
    } catch (error) {
        console.error('Error during the upload process:', error);
    }
}

export default processTxtAndSaveCredentials;
