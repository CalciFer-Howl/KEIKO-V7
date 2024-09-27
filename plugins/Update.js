import db from '../lib/database.js';
import { execSync } from 'child_process';

let handler = async (m, { conn, text }) => {
  if (conn.user.jid == conn.user.jid) {
    try {
      let branch = 'main'; // ente  'main' 
      if (text && text.toLowerCase() === 'now') {
      let Ameen = execSync(`git pull origin ${branch}`).toString();
      conn.reply(m.chat, `🛠️ *Main Branch Updates Applied Successfully* 🛠️\n\n${Ameen}`, m);
      } else {
      let Meera = execSync(`git fetch origin ${branch}`);
      let Love = execSync(`git log HEAD..origin/${branch} --oneline`).toString().trim();
      if (Love) {
          let Mine = Love.split('\n');
          let iLikeU = '🛠️ *New Updates Available* 🛠️\n\n';
          Mine.forEach((update, index) => {
            iLikeU += `🛠️ *Update ${index + 1}:* ${update}\n` 
        });
          iLikeU += `\nUse *update now* command to apply these Updates from the main branch.`;
          conn.reply(m.chat, iLikeU, m);
        } else {
          conn.reply(m.chat, '🛠️ No new Updates found. You are already up to date! 🛠️', m);
        }
      }
    } catch (error) {
      conn.reply(m.chat, `Error: ${error.message}`, m);
    }
  }
};
handler.help = ['update', 'update now']
handler.tags = ['owner']
handler.command = ['update', 'fix', 'update now']
handler.rowner = true

export default handler;
