import _0x2fda2f from 'express';
import { createServer } from 'http';
import 'path';
import 'socket.io';
import { toBuffer } from 'qrcode';
import _0x51365f from 'node-fetch';
function connect(_0x3775ea, _0x7fa9c7) {
  let _0x1e3393 = global.app = _0x2fda2f();
  console.log(_0x1e3393);
  let _0x5d6759 = global.server = createServer(_0x1e3393);
  let _0x18b7cb = "invalid";
  _0x3775ea.ev.on("connection.update", function _0x3bbcd4({
    qr: _0xa5b31f
  }) {
    if (_0xa5b31f) {
      _0x18b7cb = _0xa5b31f;
    }
  });
  _0x1e3393.use(async (_0xf8f1c9, _0x1a8f51) => {
    _0x1a8f51.setHeader('content-type', "image/png");
    _0x1a8f51.end(await toBuffer(_0x18b7cb));
  });
  _0x5d6759.listen(_0x7fa9c7, () => {
    console.log("App listened on port", _0x7fa9c7);
    if (opts.keepalive) {
      keepAlive();
    }
  });
}
function pipeEmit(_0x43d168, _0x224a51, _0x145391 = '') {
  let _0x5c1bf4 = _0x43d168.emit;
  _0x43d168.emit = function (_0x416516, ..._0x5d4b75) {
    _0x5c1bf4.emit(_0x416516, ..._0x5d4b75);
    _0x224a51.emit(_0x145391 + _0x416516, ..._0x5d4b75);
  };
  return {
    'unpipeEmit'() {
      _0x43d168.emit = _0x5c1bf4;
    }
  };
}
function keepAlive() {
  const _0x561b46 = "https://" + process.env.REPL_SLUG + '.' + process.env.REPL_OWNER + '.repl.co';
  if (/(\/\/|\.)undefined\./.test(_0x561b46)) {
    return;
  }
  setInterval(() => {
    _0x51365f(_0x561b46)["catch"](console.error);
  }, 300000);
}
export default connect;