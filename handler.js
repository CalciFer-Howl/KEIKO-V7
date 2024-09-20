import { smsg } from './lib/simple.js';
import { format } from 'util';
import { fileURLToPath } from 'url';
import _0x48359f, { join } from 'path';
import { unwatchFile, watchFile } from 'fs';
import _0x48b56d from 'chalk';
import 'node-fetch';
import 'pino';
const delay = _0x1c7445 => typeof _0x1c7445 === "number" && !isNaN(_0x1c7445) && new Promise(_0x31db56 => setTimeout(function () {
  clearTimeout(this);
  _0x31db56();
}, _0x1c7445));
const {
  getAggregateVotesInPollMessage,
  makeInMemoryStore
} = await (await import("@whiskeysockets/baileys"))['default'];
export async function handler(_0x20797f) {
  this.msgqueque = this.msgqueque || [];
  if (!_0x20797f) {
    return;
  }
  this.pushMessage(_0x20797f.messages)["catch"](console.error);
  let _0x4f62ef = _0x20797f.messages[_0x20797f.messages.length - 0x1];
  if (!_0x4f62ef) {
    return;
  }
  if (global.db.data == null) {
    await global.loadDatabase();
  }
  try {
    _0x4f62ef = smsg(this, _0x4f62ef) || _0x4f62ef;
    if (!_0x4f62ef) {
      return;
    }
    _0x4f62ef.exp = 0x0;
    _0x4f62ef.credit = false;
    _0x4f62ef.bank = false;
    _0x4f62ef.chicken = false;
    try {
      let _0xc1de49 = global.db.data.users[_0x4f62ef.sender];
      if (typeof _0xc1de49 !== 'object') {
        global.db.data.users[_0x4f62ef.sender] = {};
      }
      if (_0xc1de49) {
        if (!(typeof _0xc1de49.exp === "number" && !isNaN(_0xc1de49.exp))) {
          _0xc1de49.exp = 0x0;
        }
        if (!(typeof _0xc1de49.credit === "number" && !isNaN(_0xc1de49.credit))) {
          _0xc1de49.credit = 0xa;
        }
        if (!(typeof _0xc1de49.bank === "number" && !isNaN(_0xc1de49.bank))) {
          _0xc1de49.bank = 0x0;
        }
        if (!(typeof _0xc1de49.chicken === "number" && !isNaN(_0xc1de49.chicken))) {
          _0xc1de49.chicken = 0x0;
        }
        if (!(typeof _0xc1de49.lastclaim === "number" && !isNaN(_0xc1de49.lastclaim))) {
          _0xc1de49.lastclaim = 0x0;
        }
        if (!('registered' in _0xc1de49)) {
          _0xc1de49.registered = false;
        }
        if (!_0xc1de49.registered) {
          if (!("name" in _0xc1de49)) {
            _0xc1de49.name = _0x4f62ef.name;
          }
          if (!(typeof _0xc1de49.age === "number" && !isNaN(_0xc1de49.age))) {
            _0xc1de49.age = -0x1;
          }
          if (!(typeof _0xc1de49.regTime === "number" && !isNaN(_0xc1de49.regTime))) {
            _0xc1de49.regTime = -0x1;
          }
        }
        if (!(typeof _0xc1de49.afk === "number" && !isNaN(_0xc1de49.afk))) {
          _0xc1de49.afk = -0x1;
        }
        if (!("afkReason" in _0xc1de49)) {
          _0xc1de49.afkReason = '';
        }
        if (!("banned" in _0xc1de49)) {
          _0xc1de49.banned = false;
        }
        if (!(typeof _0xc1de49.warn === "number" && !isNaN(_0xc1de49.warn))) {
          _0xc1de49.warn = 0x0;
        }
        if (!(typeof _0xc1de49.level === "number" && !isNaN(_0xc1de49.level))) {
          _0xc1de49.level = 0x0;
        }
        if (!("role" in _0xc1de49)) {
          _0xc1de49.role = 'Tadpole';
        }
        if (!("autolevelup" in _0xc1de49)) {
          _0xc1de49.autolevelup = false;
        }
      } else {
        global.db.data.users[_0x4f62ef.sender] = {
          'exp': 0x0,
          'credit': 0x0,
          'bank': 0x0,
          'chicken': 0x0,
          'lastclaim': 0x0,
          'registered': false,
          'name': _0x4f62ef.name,
          'age': -0x1,
          'regTime': -0x1,
          'afk': -0x1,
          'afkReason': '',
          'banned': false,
          'warn': 0x0,
          'level': 0x0,
          'role': 'Tadpole',
          'autolevelup': false
        };
      }
      let _0x1fa0b8 = global.db.data.chats[_0x4f62ef.chat];
      if (typeof _0x1fa0b8 !== "object") {
        global.db.data.chats[_0x4f62ef.chat] = {};
      }
      if (_0x1fa0b8) {
        if (!("antiDelete" in _0x1fa0b8)) {
          _0x1fa0b8.antiDelete = true;
        }
        if (!('antiLink' in _0x1fa0b8)) {
          _0x1fa0b8.antiLink = false;
        }
        if (!('antiSticker' in _0x1fa0b8)) {
          _0x1fa0b8.antiSticker = false;
        }
        if (!("antiToxic" in _0x1fa0b8)) {
          _0x1fa0b8.antiToxic = false;
        }
        if (!("detect" in _0x1fa0b8)) {
          _0x1fa0b8.detect = false;
        }
        if (!("getmsg" in _0x1fa0b8)) {
          _0x1fa0b8.getmsg = true;
        }
        if (!("isBanned" in _0x1fa0b8)) {
          _0x1fa0b8.isBanned = false;
        }
        if (!("nsfw" in _0x1fa0b8)) {
          _0x1fa0b8.nsfw = false;
        }
        if (!("sBye" in _0x1fa0b8)) {
          _0x1fa0b8.sBye = '';
        }
        if (!("sDemote" in _0x1fa0b8)) {
          _0x1fa0b8.sDemote = '';
        }
        if (!("simi" in _0x1fa0b8)) {
          _0x1fa0b8.simi = false;
        }
        if (!("sPromote" in _0x1fa0b8)) {
          _0x1fa0b8.sPromote = '';
        }
        if (!("sWelcome" in _0x1fa0b8)) {
          _0x1fa0b8.sWelcome = '';
        }
        if (!("useDocument" in _0x1fa0b8)) {
          _0x1fa0b8.useDocument = false;
        }
        if (!('viewOnce' in _0x1fa0b8)) {
          _0x1fa0b8.viewOnce = false;
        }
        if (!('viewStory' in _0x1fa0b8)) {
          _0x1fa0b8.viewStory = false;
        }
        if (!('welcome' in _0x1fa0b8)) {
          _0x1fa0b8.welcome = false;
        }
        if (!('chatbot' in _0x1fa0b8)) {
          _0x1fa0b8.chatbot = false;
        }
        if (!(typeof _0x1fa0b8.expired === "number" && !isNaN(_0x1fa0b8.expired))) {
          _0x1fa0b8.expired = 0x0;
        }
      } else {
        global.db.data.chats[_0x4f62ef.chat] = {
          'antiDelete': true,
          'antiLink': false,
          'antiSticker': false,
          'antiToxic': false,
          'detect': false,
          'expired': 0x0,
          'getmsg': true,
          'isBanned': false,
          'nsfw': false,
          'sBye': '',
          'sDemote': '',
          'simi': false,
          'sPromote': '',
          'sticker': false,
          'sWelcome': '',
          'useDocument': false,
          'viewOnce': false,
          'viewStory': false,
          'welcome': false,
          'chatbot': false
        };
      }
      let _0x5a831a = global.db.data.settings[this.user.jid];
      if (typeof _0x5a831a !== 'object') {
        global.db.data.settings[this.user.jid] = {};
      }
      if (_0x5a831a) {
        if (!("self" in _0x5a831a)) {
          _0x5a831a.self = false;
        }
        if (!("restrict" in _0x5a831a)) {
          _0x5a831a.restrict = false;
        }
        if (!('restartDB' in _0x5a831a)) {
          _0x5a831a.restartDB = 0x0;
        }
        if (!("status" in _0x5a831a)) {
          _0x5a831a.status = 0x0;
        }
      } else {
        global.db.data.settings[this.user.jid] = {
          'self': false,
          'restrict': false,
          'restartDB': 0x0,
          'status': 0x0
        };
      }
    } catch (_0x4b35b4) {
      console.error(_0x4b35b4);
    }
    if (opts.nyimak) {
      return;
    }
    if (opts.pconly && _0x4f62ef.chat.endsWith('g.us')) {
      return;
    }
    if (opts.gconly && !_0x4f62ef.chat.endsWith("g.us")) {
      return;
    }
    if (opts.swonly && _0x4f62ef.chat !== "status@broadcast") {
      return;
    }
    if (typeof _0x4f62ef.text !== "string") {
      _0x4f62ef.text = '';
    }
    const _0x51e057 = [conn.decodeJid(global.conn.user.id), ...global.owner.map(([_0x455525]) => _0x455525)].map(_0x35b5f7 => _0x35b5f7.replace(/[^0-9]/g, '') + "@s.whatsapp.net").includes(_0x4f62ef.sender);
    const _0x2013ee = _0x51e057 || _0x4f62ef.fromMe;
    const _0x8a5a05 = _0x2013ee || global.mods.map(_0x15eec6 => _0x15eec6.replace(/[^0-9]/g, '') + "@s.whatsapp.net").includes(_0x4f62ef.sender);
    const _0x2dae28 = _0x51e057 || global.prems.map(_0x23eb71 => _0x23eb71.replace(/[^0-9]/g, '') + "@s.whatsapp.net").includes(_0x4f62ef.sender);
    if (opts.queque && _0x4f62ef.text && !(_0x8a5a05 || _0x2dae28)) {
      let _0x35cf9d = this.msgqueque;
      const _0x29f585 = _0x35cf9d[_0x35cf9d.length - 0x1];
      _0x35cf9d.push(_0x4f62ef.id || _0x4f62ef.key.id);
      setInterval(async function () {
        if (_0x35cf9d.indexOf(_0x29f585) === -0x1) {
          clearInterval(this);
        }
        await delay(5000);
      }, 5000);
    }
    if (process.env.MODE && process.env.MODE.toLowerCase() === "private" && !(_0x51e057 || _0x2013ee)) {
      return;
    }
    if (_0x4f62ef.isBaileys) {
      return;
    }
    _0x4f62ef.exp += Math.ceil(Math.random() * 0xa);
    let _0x1c1f0d;
    let _0x42d668 = global.db.data && global.db.data.users && global.db.data.users[_0x4f62ef.sender];
    const _0x57762f = (_0x4f62ef.isGroup ? (conn.chats[_0x4f62ef.chat] || {}).metadata || (await this.groupMetadata(_0x4f62ef.chat)['catch'](_0x3644d3 => null)) : {}) || {};
    const _0xccb525 = (_0x4f62ef.isGroup ? _0x57762f.participants : []) || [];
    const _0x2f2fc4 = (_0x4f62ef.isGroup ? _0xccb525.find(_0x5a49e7 => conn.decodeJid(_0x5a49e7.id) === _0x4f62ef.sender) : {}) || {};
    const _0x2dd2a2 = (_0x4f62ef.isGroup ? _0xccb525.find(_0x1da3e2 => conn.decodeJid(_0x1da3e2.id) == conn.user.jid) : {}) || {};
    const _0x157097 = _0x2f2fc4?.["admin"] == 'superadmin' || false;
    const _0x1a1f87 = _0x157097 || _0x2f2fc4?.["admin"] == "admin" || false;
    const _0x1b419f = _0x2dd2a2?.["admin"] || false;
    const _0x5bbd07 = _0x48359f.join(_0x48359f.dirname(fileURLToPath(import.meta.url)), "./plugins");
    for (let _0x544b69 in global.plugins) {
      let _0x3eb71f = global.plugins[_0x544b69];
      if (!_0x3eb71f) {
        continue;
      }
      if (_0x3eb71f.disabled) {
        continue;
      }
      const _0x10a895 = join(_0x5bbd07, _0x544b69);
      if (typeof _0x3eb71f.all === "function") {
        try {
          await _0x3eb71f.all.call(this, _0x4f62ef, {
            'chatUpdate': _0x20797f,
            '__dirname': _0x5bbd07,
            '__filename': _0x10a895
          });
        } catch (_0x2c76e2) {
          console.error(_0x2c76e2);
          for (let [_0x1ee96b] of global.owner.filter(([_0x3dc1f8, _0x23b3b7, _0x25d5f4]) => _0x25d5f4 && _0x3dc1f8)) {
            let _0xe37096 = (await conn.onWhatsApp(_0x1ee96b))[0x0] || {};
            if (_0xe37096.exists) {
              _0x4f62ef.reply(("*◽Plugin:* " + _0x544b69 + "\n\n*◽Sender:* " + _0x4f62ef.sender + "\n\n*◽Chat:* " + _0x4f62ef.chat + "\n\n*◽Command:* " + _0x4f62ef.text + "\n\n${format(e)}").trim(), _0xe37096.jid);
            }
          }
        }
      }
      if (!opts.restrict) {
        if (_0x3eb71f.tags && _0x3eb71f.tags.includes('admin')) {
          continue;
        }
      }
      let _0x43172e = _0x3eb71f.customPrefix ? _0x3eb71f.customPrefix : conn.prefix ? conn.prefix : global.prefix;
      let _0x8a8f71 = (_0x43172e instanceof RegExp ? [[_0x43172e.exec(_0x4f62ef.text), _0x43172e]] : Array.isArray(_0x43172e) ? _0x43172e.map(_0x480974 => {
        let _0x12c18c = _0x480974 instanceof RegExp ? _0x480974 : new RegExp(_0x480974.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&"));
        return [_0x12c18c.exec(_0x4f62ef.text), _0x12c18c];
      }) : typeof _0x43172e === "string" ? [[new RegExp(_0x43172e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&")).exec(_0x4f62ef.text), new RegExp(_0x43172e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&"))]] : [[[], new RegExp()]]).find(_0x5d7785 => _0x5d7785[0x1]);
      if (typeof _0x3eb71f.before === 'function') {
        if (await _0x3eb71f.before.call(this, _0x4f62ef, {
          'match': _0x8a8f71,
          'conn': this,
          'participants': _0xccb525,
          'groupMetadata': _0x57762f,
          'user': _0x2f2fc4,
          'bot': _0x2dd2a2,
          'isROwner': _0x51e057,
          'isOwner': _0x2013ee,
          'isRAdmin': _0x157097,
          'isAdmin': _0x1a1f87,
          'isBotAdmin': _0x1b419f,
          'isPrems': _0x2dae28,
          'chatUpdate': _0x20797f,
          '__dirname': _0x5bbd07,
          '__filename': _0x10a895
        })) {
          continue;
        }
      }
      if (typeof _0x3eb71f !== "function") {
        continue;
      }
      if (_0x1c1f0d = (_0x8a8f71[0x0] || '')[0x0]) {
        let _0x1a004d = _0x4f62ef.text.replace(_0x1c1f0d, '');
        let [_0x5bcc4b, ..._0x1473c4] = _0x1a004d.trim().split` `.filter(_0x1ea8ba => _0x1ea8ba);
        _0x1473c4 = _0x1473c4 || [];
        let _0x3dcd8a = _0x1a004d.trim().split` `.slice(0x1);
        let _0x1be440 = _0x3dcd8a.join` `;
        _0x5bcc4b = (_0x5bcc4b || '').toLowerCase();
        let _0x28e1c7 = _0x3eb71f.fail || global.dfail;
        let _0x2f174f = _0x3eb71f.command instanceof RegExp ? _0x3eb71f.command.test(_0x5bcc4b) : Array.isArray(_0x3eb71f.command) ? _0x3eb71f.command.some(_0x16cc06 => _0x16cc06 instanceof RegExp ? _0x16cc06.test(_0x5bcc4b) : _0x16cc06 === _0x5bcc4b) : typeof _0x3eb71f.command === "string" ? _0x3eb71f.command === _0x5bcc4b : false;
        if (!_0x2f174f) {
          continue;
        }
        _0x4f62ef.plugin = _0x544b69;
        if (_0x4f62ef.chat in global.db.data.chats || _0x4f62ef.sender in global.db.data.users) {
          let _0x259c42 = global.db.data.chats[_0x4f62ef.chat];
          let _0x1e8baf = global.db.data.users[_0x4f62ef.sender];
          if (_0x544b69 != "owner-unbanchat.js" && _0x259c42?.["isBanned"]) {
            return;
          }
          if (_0x544b69 != "owner-unbanuser.js" && _0x1e8baf?.["banned"]) {
            return;
          }
        }
        if (_0x3eb71f.rowner && _0x3eb71f.owner && !(_0x51e057 || _0x2013ee)) {
          _0x28e1c7("owner", _0x4f62ef, this);
          continue;
        }
        if (_0x3eb71f.rowner && !_0x51e057) {
          _0x28e1c7("rowner", _0x4f62ef, this);
          continue;
        }
        if (_0x3eb71f.owner && !_0x2013ee) {
          _0x28e1c7('owner', _0x4f62ef, this);
          continue;
        }
        if (_0x3eb71f.mods && !_0x8a5a05) {
          _0x28e1c7('mods', _0x4f62ef, this);
          continue;
        }
        if (_0x3eb71f.premium && !_0x2dae28) {
          _0x28e1c7("premium", _0x4f62ef, this);
          continue;
        }
        if (_0x3eb71f.group && !_0x4f62ef.isGroup) {
          _0x28e1c7("group", _0x4f62ef, this);
          continue;
        } else {
          if (_0x3eb71f.botAdmin && !_0x1b419f) {
            _0x28e1c7("botAdmin", _0x4f62ef, this);
            continue;
          } else {
            if (_0x3eb71f.admin && !_0x1a1f87) {
              _0x28e1c7('admin', _0x4f62ef, this);
              continue;
            }
          }
        }
        if (_0x3eb71f['private'] && _0x4f62ef.isGroup) {
          _0x28e1c7("private", _0x4f62ef, this);
          continue;
        }
        if (_0x3eb71f.register == true && _0x42d668.registered == false) {
          _0x28e1c7("unreg", _0x4f62ef, this);
          continue;
        }
        _0x4f62ef.isCommand = true;
        let _0x21b441 = 'exp' in _0x3eb71f ? parseInt(_0x3eb71f.exp) : 0x11;
        if (_0x21b441 > 0xc8) {
          _0x4f62ef.reply("cheater");
        } else {
          _0x4f62ef.exp += _0x21b441;
        }
        if (!_0x2dae28 && _0x3eb71f.credit && global.db.data.users[_0x4f62ef.sender].credit < _0x3eb71f.credit * 0x1) {
          this.reply(_0x4f62ef.chat, "*乂 You don't have enough gold*", _0x4f62ef);
          continue;
        }
        if (_0x3eb71f.level > _0x42d668.level) {
          this.reply(_0x4f62ef.chat, "*Level required " + _0x3eb71f.level + " to use this command.* \n*Your level " + _0x42d668.level + '*', _0x4f62ef);
          continue;
        }
        let _0x390ac5 = {
          'match': _0x8a8f71,
          'usedPrefix': _0x1c1f0d,
          'noPrefix': _0x1a004d,
          '_args': _0x3dcd8a,
          'args': _0x1473c4,
          'command': _0x5bcc4b,
          'text': _0x1be440,
          'conn': this,
          'participants': _0xccb525,
          'groupMetadata': _0x57762f,
          'user': _0x2f2fc4,
          'bot': _0x2dd2a2,
          'isROwner': _0x51e057,
          'isOwner': _0x2013ee,
          'isRAdmin': _0x157097,
          'isAdmin': _0x1a1f87,
          'isBotAdmin': _0x1b419f,
          'isPrems': _0x2dae28,
          'chatUpdate': _0x20797f,
          '__dirname': _0x5bbd07,
          '__filename': _0x10a895
        };
        try {
          await _0x3eb71f.call(this, _0x4f62ef, _0x390ac5);
          if (!_0x2dae28) {
            _0x4f62ef.credit = _0x4f62ef.credit || _0x3eb71f.credit || false;
          }
        } catch (_0x146988) {
          _0x4f62ef.error = _0x146988;
          console.error(_0x146988);
          if (_0x146988) {
            let _0x5288ef = format(_0x146988);
            for (let _0x4611e1 of Object.values(global.APIKeys)) _0x5288ef = _0x5288ef.replace(new RegExp(_0x4611e1, 'g'), "#HIDDEN#");
            if (_0x146988.name) {
              for (let [_0x2c352d] of global.owner.filter(([_0x2644f4, _0x231c8b, _0x1cb892]) => _0x1cb892 && _0x2644f4)) {
                let _0x174cca = (await this.onWhatsApp(_0x2c352d))[0x0] || {};
                if (_0x174cca.exists) {
                  return _0x4f62ef.reply(("*◽Plugin:* " + _0x544b69 + "\n\n*◽Sender:* " + _0x4f62ef.sender + "\n\n*◽Chat:* " + _0x4f62ef.chat + "\n\n*◽Command:* " + _0x1c1f0d + _0x5bcc4b + " " + _0x1473c4.join(" ") + "\n\n⚡ *Error Logs:*\n\n" + _0x5288ef).trim(), _0x174cca.jid);
                }
              }
            }
            _0x4f62ef.reply(_0x5288ef);
          }
        } finally {
          if (typeof _0x3eb71f.after === "function") {
            try {
              await _0x3eb71f.after.call(this, _0x4f62ef, _0x390ac5);
            } catch (_0x5c1a9f) {
              console.error(_0x5c1a9f);
            }
          }
          if (_0x4f62ef.credit) {
            _0x4f62ef.reply("You used *" + +_0x4f62ef.credit + '*');
          }
        }
        break;
      }
    }
  } catch (_0x43b79f) {
    console.error(_0x43b79f);
  } finally {
    if (opts.queque && _0x4f62ef.text) {
      const _0x3b7f6d = this.msgqueque.indexOf(_0x4f62ef.id || _0x4f62ef.key.id);
      if (_0x3b7f6d !== -0x1) {
        this.msgqueque.splice(_0x3b7f6d, 0x1);
      }
    }
    let _0x4ae82b;
    let _0xca14f7 = global.db.data.stats;
    if (_0x4f62ef) {
      if (_0x4f62ef.sender && (_0x4ae82b = global.db.data.users[_0x4f62ef.sender])) {
        _0x4ae82b.exp += _0x4f62ef.exp;
        _0x4ae82b.credit -= _0x4f62ef.credit * 0x1;
        _0x4ae82b.bank -= _0x4f62ef.bank;
        _0x4ae82b.chicken -= _0x4f62ef.chicken;
      }
      let _0x5ea8e5;
      if (_0x4f62ef.plugin) {
        let _0x30240f = +new Date();
        if (_0x4f62ef.plugin in _0xca14f7) {
          _0x5ea8e5 = _0xca14f7[_0x4f62ef.plugin];
          if (!(typeof _0x5ea8e5.total === "number" && !isNaN(_0x5ea8e5.total))) {
            _0x5ea8e5.total = 0x1;
          }
          if (!(typeof _0x5ea8e5.success === "number" && !isNaN(_0x5ea8e5.success))) {
            _0x5ea8e5.success = _0x4f62ef.error != null ? 0x0 : 0x1;
          }
          if (!(typeof _0x5ea8e5.last === "number" && !isNaN(_0x5ea8e5.last))) {
            _0x5ea8e5.last = _0x30240f;
          }
          if (!(typeof _0x5ea8e5.lastSuccess === "number" && !isNaN(_0x5ea8e5.lastSuccess))) {
            _0x5ea8e5.lastSuccess = _0x4f62ef.error != null ? 0x0 : _0x30240f;
          }
        } else {
          _0x5ea8e5 = _0xca14f7[_0x4f62ef.plugin] = {
            'total': 0x1,
            'success': _0x4f62ef.error != null ? 0x0 : 0x1,
            'last': _0x30240f,
            'lastSuccess': _0x4f62ef.error != null ? 0x0 : _0x30240f
          };
        }
        _0x5ea8e5.total += 0x1;
        _0x5ea8e5.last = _0x30240f;
        if (_0x4f62ef.error == null) {
          _0x5ea8e5.success += 0x1;
          _0x5ea8e5.lastSuccess = _0x30240f;
        }
      }
    }
    try {
      if (!opts.noprint) {
        await (await import("./lib/print.js"))["default"](_0x4f62ef, this);
      }
    } catch (_0x5d1107) {
      console.log(_0x4f62ef, _0x4f62ef.quoted, _0x5d1107);
    }
    if (process.env.statusview && _0x4f62ef.key.remoteJid === "status@broadcast") {
      await conn.readMessages([_0x4f62ef.key]);
    }
  }
}
export async function participantsUpdate({
  id: _0x48954f,
  participants: _0x3fcdbd,
  action: _0x460d7a
}) {
  if (opts.self || this.isInit) {
    return;
  }
  if (global.db.data == null) {
    await loadDatabase();
  }
  const _0x4899dc = global.db.data.chats[_0x48954f] || {};
  switch (_0x460d7a) {
    case "promote":
      const _0x483630 = (_0x4899dc.sPromote || this.spromote || conn.spromote || "⚡@user *is now admin*").replace("@user", '@' + _0x3fcdbd[0x0].split('@')[0x0]);
      if (_0x4899dc.detect) {
        this.sendMessage(_0x48954f, {
          'text': _0x483630.trim(),
          'mentions': [_0x3fcdbd[0x0]]
        });
      }
      break;
    case "demote":
      const _0x4c4d72 = (_0x4899dc.sDemote || this.sdemote || conn.sdemote || "⚡@user *demoted from admin*").replace("@user", '@' + _0x3fcdbd[0x0].split('@')[0x0]);
      if (_0x4899dc.detect) {
        this.sendMessage(_0x48954f, {
          'text': _0x4c4d72.trim(),
          'mentions': [_0x3fcdbd[0x0]]
        });
      }
      break;
  }
}
export async function groupsUpdate(_0x2a33d2) {
  if (opts.self) {
    return;
  }
  for (const _0x44a543 of _0x2a33d2) {
    const _0x5b6b96 = _0x44a543.id;
    if (!_0x5b6b96) {
      continue;
    }
    let _0x245509 = global.db.data.chats[_0x5b6b96] || {};
    let _0x273de4 = '';
    if (!_0x245509.detect) {
      continue;
    }
    if (_0x44a543.desc) {
      _0x273de4 = (_0x245509.sDesc || this.sDesc || conn.sDesc || "*⚡ Description Has Been Changed To*\n\n@desc").replace('@desc', _0x44a543.desc);
    } else {
      if (_0x44a543.subject) {
        _0x273de4 = (_0x245509.sSubject || this.sSubject || conn.sSubject || "*⚡ Subject Has Been Changed To*\n\n@subject").replace('@subject', _0x44a543.subject);
      } else {
        if (_0x44a543.icon) {
          _0x273de4 = (_0x245509.sIcon || this.sIcon || conn.sIcon || "*⚡ Icon Has Been Changed*").replace("@icon", _0x44a543.icon);
        } else {
          if (_0x44a543.revoke) {
            _0x273de4 = (_0x245509.sRevoke || this.sRevoke || conn.sRevoke || "*⚡ Group Link Has Been Changed To*\n\n@revoke").replace('@revoke', _0x44a543.revoke);
          } else {
            if (_0x44a543.announce === true) {
              _0x273de4 = _0x245509.sAnnounceOn || this.sAnnounceOn || conn.sAnnounceOn || "*🔒 Group Is Now Closed!*";
            } else {
              if (_0x44a543.announce === false) {
                _0x273de4 = _0x245509.sAnnounceOff || this.sAnnounceOff || conn.sAnnounceOff || "*🔓 Group Is Now Open!*";
              } else {
                if (_0x44a543.restrict === true) {
                  _0x273de4 = _0x245509.sRestrictOn || this.sRestrictOn || conn.sRestrictOn || "*🚫 Group Is Now Restricted To Participants Only!*";
                } else if (_0x44a543.restrict === false) {
                  _0x273de4 = _0x245509.sRestrictOff || this.sRestrictOff || conn.sRestrictOff || "*✅ Group Is Now Restricted To Admins Only!*";
                }
              }
            }
          }
        }
      }
    }
    if (!_0x273de4) {
      continue;
    }
    await this.sendMessage(_0x5b6b96, {
      'text': _0x273de4,
      'mentions': this.parseMention(_0x273de4)
    });
  }
}
export async function deleteUpdate(_0x2c1331) {
  try {
    if (typeof process.env.antidelete === "undefined" || process.env.antidelete.toLowerCase() === 'false') {
      return;
    }
    const {
      fromMe: _0x3de502,
      id: _0x4e1319,
      participant: _0x3f0518
    } = _0x2c1331;
    if (_0x3de502) {
      return;
    }
    let _0x468d14 = this.serializeM(this.loadMessage(_0x4e1319));
    if (!_0x468d14) {
      return;
    }
    await this.reply(conn.user.id, ("\n            ≡ deleted a message \n            ┌─⊷  𝘼𝙉𝙏𝙄 𝘿𝙀𝙇𝙀𝙏𝙀 \n            ▢ *Number :* @" + _0x3f0518.split`@`[0x0] + " \n            └─────────────\n            ").trim(), _0x468d14, {
      'mentions': [_0x3f0518]
    });
    this.copyNForward(conn.user.id, _0x468d14, false)["catch"](_0x414a8a => console.log(_0x414a8a, _0x468d14));
  } catch (_0xcb494) {
    console.error(_0xcb494);
  }
}
export async function pollUpdate(_0x204ff0) {
  for (const {
    key: _0x301052,
    update: _0x4bf2d0
  } of _0x204ff0) {
    if (_0x204ff0.pollUpdates) {
      const _0xe3a4e9 = await this.serializeM(this.loadMessage(_0x301052.id));
      if (_0xe3a4e9) {
        const _0x5d6b99 = await getAggregateVotesInPollMessage({
          'message': _0xe3a4e9.message,
          'pollUpdates': _0xe3a4e9.pollUpdates
        });
        _0x204ff0.pollUpdates[0x0].vote = _0x5d6b99;
        await console.log(_0x5d6b99);
        this.appenTextMessage(_0x204ff0, _0x204ff0.pollUpdates[0x0].vote || _0x5d6b99.filter(_0x2f3559 => _0x2f3559.voters.length !== 0x0)[0x0]?.["name"], _0x204ff0.message);
      }
    }
  }
}
export async function presenceUpdate(_0x5e6e69) {
  const _0x41187c = _0x5e6e69.id;
  const _0x362443 = Object.keys(_0x5e6e69.presences);
  const _0x218365 = _0x5e6e69.presences[_0x362443]?.["lastKnownPresence"];
  const _0x2efe92 = global.db.data.users[_0x362443[0x0]];
  if (_0x2efe92?.['afk'] && _0x218365 === "composing" && _0x2efe92.afk > -0x1) {
    if (_0x2efe92.banned) {
      _0x2efe92.afk = -0x1;
      _0x2efe92.afkReason = "User Banned Afk";
      return;
    }
    await console.log('AFK');
    const _0x4225a1 = _0x362443[0x0].split('@')[0x0];
    const _0x1a8c16 = new Date() - _0x2efe92.afk;
    const _0x1037c1 = "\n@" + _0x4225a1 + " Has Stopped Being Afk And Is Currently Typing.\n\nReason: " + (_0x2efe92.afkReason ? _0x2efe92.afkReason : "No Reason") + "\nFor The Past " + _0x1a8c16.toTimeString() + ".\n";
    this.reply(_0x41187c, _0x1037c1, null, {
      'mentions': this.parseMention(_0x1037c1)
    });
    _0x2efe92.afk = -0x1;
    _0x2efe92.afkReason = '';
  }
}
global.dfail = (_0x533536, _0x5bc48c, _0x4694e0) => {
  const _0x29a361 = "👋🏻 Hai *@" + _0x5bc48c.sender.split('@')[0x0] + "*, ";
  const _0x5ce2bf = {
    
    //'owner': "*🪀 Owner's Query*\n\n    " + _0x29a361 + " This Command Can Only Be Used By The *Bot Owner*!",
    'owner': "_◽You Are Not My Owner_",
   // 'moderator': "*🛡️ Moderator's Query*\n\n    " + _0x29a361 + " This Command Can Only Be Used By *Moderators*!",
   'moderator': "_◽You Are Not My Moderator_",
   // 'premium': "*💎 Premium Query*\n\n    " + _0x29a361 + " This Command Is Only For *Premium Members*!",
   'premium': "_◽ Premium Users Only_",
    //'group': "*👥 Group Query*\n\n    " + _0x29a361 + " This Command Can Only Be Used In *Group Chats*!",
    'group': "_◽Only Works In Group_",
    //'private': "*👻 Private Query*\n\n    " + _0x29a361 + " This Command Can Only Be Used In *Private Chats*!",
    'group': "_◽DM Me Its Private message_",
   // 'admin': "*👤 Admin's Query*\n\n    " + _0x29a361 + " This Command Is Only For *Group Admins*!",
    'admin': "_◽You Are Not An Admin_",
 //  'botAdmin': "*😸 Bot Admin's Query*\n\n    " + _0x29a361 + " Make The Bot An *Admin* To Use This Command!",
   'botAdmin': "_◽You Are Not An Bot Admin_"
     'unreg': "*🔒 Registration Query*\n\n    " + _0x29a361 + " Please Register To Use This Feature By Typing:\n\n*#register name.age*\n\nExample: *#register " + _0x5bc48c.name + ".18*!",
    'nsfw': "*🔞 NSFW Query*\n\n    " + _0x29a361 + " NSFW Is Not Active. Please Contact The Group Admin To Enable This Feature!",
  //  'restrict': "*🙊 Inactive Feature Query*\n\n    " + _0x29a361 + " This feature is *disabled*!"
  'restrict': "_◽Inactive Feature, Its Disabled_"
  }[_0x533536];
  if (_0x5ce2bf) {
    return _0x5bc48c.reply(_0x5ce2bf);
  }
};
let file = global.__filename(import.meta.url, true);
watchFile(file, async () => {
  unwatchFile(file);
  console.log(_0x48b56d.redBright("Update handler.js"));
  if (global.reloadHandler) {
    console.log(await global.reloadHandler());
  }
});