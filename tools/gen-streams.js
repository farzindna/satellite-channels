// Regenerates tools/streams.json (the stream list the Mac checkers read) from channels.js.
//   node tools/gen-streams.js
const fs = require('fs');
global.window = {};
eval(fs.readFileSync(__dirname + '/../channels.js', 'utf8'));
const out = window.SAT_CHANNELS.map((c, i) => ({ num: i + 1, id: c.id, name: c.name, streams: c.streams || [], embed: c.embed || '' }))
  .filter(c => c.streams.length);
fs.writeFileSync(__dirname + '/streams.json', JSON.stringify(out));
console.log(out.length + ' channels with streams written');
