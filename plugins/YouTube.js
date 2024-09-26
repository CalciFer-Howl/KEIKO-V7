import fetch from 'node-fetch';
import ffmpeg from 'fluent-ffmpeg';
import { Readable } from 'stream';
import { toAudio } from '../lib/converter.js'
let handler = async (m, 
                { conn,
                usedPrefix,
                text,
                args,
                command}) => {
   if (!text) throw `*Search A Name That U Want To Download🧙🏻*\n\nExample: ${usedPrefix}song Janiye🎶 or Url`
//const AM = 'Janiye Song'
try{
let fetS = `${ironman}search/yts?query=${text}`    
const res = await fetch(fetS);
      const AmeenData = await res.json();
      const AmeenJson = AmeenData[0];
      const MeeraImg = AmeenJson.thumbnail;
      const MeeraUrl = AmeenJson.url;
let fetA = `${ironman}ironman/dl/ytdl2?url=${MeeraUrl}`
// m.reply(MeeraUrl)
conn.sendMessage(m.chat, { image: { url: MeeraImg }, caption: "◽ Wait Few Seconds.." })
 m.react('🦋')
       var AmeenMeera = await fetch(fetA);
      var data = await AmeenMeera.json();
      const AmeenS = data.audio;
      const AmeenV = data.video;
      const Audio = '?Fetch ' + AmeenS
      const Video = '?Fetch ' + AmeenV
      const msg = "Select The Media That U Want To Download ✨\nAudio is Downloading🔃\nDo u need video click👇🏻";
      conn.sendButton(m.chat, msg, "Keiko Media", null, [['VIDEO', Video]]);

      let mediaUrl = AmeenV.trimEnd();
      let mediaResponse = await fetch(mediaUrl);
      let mediaArrayBuffer = await mediaResponse.arrayBuffer();
      let mediaBuffer = Buffer.from(mediaArrayBuffer);

      let audio = await toAudio(mediaBuffer, 'mp4');

  conn.sendFile(m.chat, audio.data, 'KeikoV7.mp3', '', m, null, { mimetype: 'audio/mp4', ptt:true })
  
      // conn.sendMessage(m.chat, { video: audio, mimetype: 'audio/mp4' });

   } catch (e) {
      m.react('❌');
      m.reply(`Error: ${e.message}`)}
};
handler.command = ['yta', 'ytv', 'ytmp3', 'ytmp4', 'song']
export default handler
