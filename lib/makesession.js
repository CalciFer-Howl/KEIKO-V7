import { fileURLToPath } from 'url'
import path from 'path'
import { writeFileSync } from 'fs'
import { BufferJSON } from '@whiskeysockets/baileys'
import { File } from 'megajs'

async function processTxtAndSaveCredentials(txt) {
  const __filename = fileURLToPath(import.meta.url)
  const __dirname = path.dirname(__filename)

  const SIDV = txt.replace('KeikoV7~', '')

  try {
    let file = File.fromURL(`https://mega.nz/file/${SIDV}`)
    
    const fileData = await new Promise((resolve, reject) => {
      file.download((err, data) => {
        if (err) return reject(err)
        resolve(data)
      })
    })
    const decodedData = fileData.toString()
    const credsPath = path.join(__dirname, '..', 'session', 'creds.json')
    writeFileSync(credsPath, decodedData)
    console.log('Saved credentials to', credsPath)
  } catch (error) {
    console.error('Error fetching or saving data:', error)
  }
}
export default processTxtAndSaveCredentials
