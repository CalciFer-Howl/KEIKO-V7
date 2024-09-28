import { fileURLToPath } from 'url'
import path from 'path'
import { writeFileSync } from 'fs'
import PastebinAPI from 'pastebin-js'
import { File } from 'megajs'
let pastebin = new PastebinAPI('u9SylH2Qa3eW_UQHq1kivWwKUMcajqLk')

async function processTxtAndSaveCredentials(txt) {
  const __filename = fileURLToPath(import.meta.url)
  const __dirname = path.dirname(__filename)
  if (txt.includes('KeikoBot⚡')) {
    const Ameen = txt.replace('KeikoBot⚡', '')
    try {
      let file = File.fromURL(`https://mega.nz/file/${Ameen}`)
      const fileData = await new Promise((resolve, reject) => {
        file.download((err, data) => {
          if (err) return reject(err)
          resolve(data)
        })
      })
      const Meera = fileData.toString()
      const KeikoSCreds = path.join(__dirname, '..', 'session', 'creds.json')
      writeFileSync(KeikoSCreds, Meera)
      console.log('⚡ AmeenInt has saved the credentials... or have they? 😈 To:', KeikoSCreds)
    } catch (error) {
      console.error('☠️ AmeenInt hit a snag while fetching or saving data:', error)
    }
  } else if (txt.includes('KeikoV5~')) {
    const V5Ameen = txt.replace('KeikoV5~', '')
    try {
      const Meera = await pastebin.getPaste(V5Ameen)
      const KeikoSCreds = path.join(__dirname, '..', 'session', 'creds.json')
      writeFileSync(KeikoSCreds, Meera.toString())
      console.log('🎉 AmeenInt has saved the credentials... but was it the right one? 🕵️‍♂️ To:', KeikoSCreds)
    } catch (jsonError) {
      console.error('⚠️ AmeenInt accidentally triggered the wrong spell while fetching Pastebin data:', jsonError)
    }
  } else {
    console.log('🕵️‍♂️ AmeenInt is confused... No valid identifier found. Did you mean "KeikoBot⚡" or "KeikoV5~"? Are you trying to prank me? 😈')
  }
  const randomMessage = Math.random() < 0.2 ? "👻 Boo! You’ve been pranked!" : null
  if (randomMessage) {
    console.log(randomMessage)
  }
}

export default processTxtAndSaveCredentials
