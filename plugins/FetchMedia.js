import cp, { exec as _exec } from 'child_process'
import { promisify } from 'util'
import fetch from 'node-fetch'

let exec = promisify(_exec).bind(cp)
let handler = async (m, { conn,
                         isOwner,
                         command,
                         text }) => {
  if (conn.user.jid != conn.user.jid) return
  m.react('🫶🏻')
    let Ameen = text.trimEnd()
    try {
    let response = await fetch(Ameen)
    let contentType = response.headers.get('content-type')
    if (contentType.startsWith('image/')) {
    await conn.sendMessage(m.key.remoteJid, { image: { url: Ameen }, caption: "◽ Take Your Image!" })
    } else if (contentType.startsWith('video/')) {
    if (command.includes('ptv')) {
    await conn.sendMessage(m.key.remoteJid, { video: { url: Ameen }, mimetype: 'video/mp4', gifPlayback: true, ptv: true, caption: "◽By Ameen!" })
    } else {
    await conn.sendMessage(m.key.remoteJid, { video: { url: Ameen }, caption: "◽Take Your Video!" })}
    } else if (contentType.startsWith('audio/')) {
    await conn.sendMessage(m.key.remoteJid, { audio: { url: Ameen }, mimetype: 'audio/mp4' })
    } else {
    await conn.sendMessage(m.key.remoteJid, { document: { url: Ameen }, mimetype: contentType, filename: "document" + `.${contentType.split('/')[1]}` })
    }
  } catch (e) {
    m.reply(`Error: ${e.message}`)}}

handler.help = ['? fetch']
handler.tags = ['media']
handler.customPrefix = /^[!]/
handler.command = new RegExp()

export default handler
