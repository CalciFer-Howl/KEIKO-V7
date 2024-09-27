import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
  if (!m.quoted || !m.quoted.text) {
    return m.reply('Replay To A Js Code!')}
let Ameen = m.quoted.text.trim()
  m.react('📇')
try {
   let Meera = await fetch(`${calcifer}ameen/v7/js?code=${encodeURIComponent(Ameen)}`)
       let Love = await Meera.json()

    if (Love.success) {
      await conn.sendMessage(m.key.remoteJid, { text: Love.obfuscatedCode })
  } else {
 await conn.sendMessage(m.key.remoteJid, { text: `Error: ${Love.errors.join(', ')}` })}
  } catch (e) {
    m.reply(`Error: ${e.message}`)
  }}
handler.help = ['$']
handler.tags = ['text']
handler.command = ['obfuscate', 'enc']

export default handler
                             
