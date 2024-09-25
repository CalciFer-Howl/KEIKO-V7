import { fileURLToPath } from 'url'
import path from 'path'
import { writeFileSync } from 'fs'
import { BufferJSON } from '@whiskeysockets/baileys'
const { File } = require('megajs')

async function processTxtAndSaveCredentials(txt) {
  const __filename = fileURLToPath(import.meta.url)
  const __dirname = path.dirname(__filename)

  const SIDV = txt.replace('KeikoV7~', '')
  let decodedData = await File.fromURL(`https://mega.nz/file/${SIDV}`)


  try {
    const credsPath = path.join(__dirname, '..', 'session', 'creds.json')
    writeFileSync(credsPath, decodedData.toString())
    console.log('Saved credentials to', credsPath)
  } catch (jsonError) {
    console.error('Error parsing JSON:', jsonError)
  }
}

export default processTxtAndSaveCredentials

