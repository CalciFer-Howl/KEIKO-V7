import fs from 'fs';

let handler = async (m, { text, usedPrefix, command }) => {
  
    const isDeveloper = global.developer.map(([_dev]) => _dev.replace(/[^0-9]/g, '') + "@s.whatsapp.net")
        .includes(m.sender);

    if (!isDeveloper) return;

    if (!text) throw `=>await.(!text)\n\nUsage:\n${usedPrefix + command} <text>\n\nExample:\n${usedPrefix + command} menu`;
    if (!m.quoted.text) throw `No normal state`;

    let path = `plugins/${text}.js`;
    await fs.writeFileSync(path, m.quoted.text);
    m.reply(`STORED ${path}`);
};

handler.help = ['sfp'];
handler.tags = ['owner'];
handler.command = /^fry$/i;
handler.developer = true;

export default handler;
