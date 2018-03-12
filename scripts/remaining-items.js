const fs = require('fs-extra');

/** @type {string[]} */
const weapons = fs.readJsonSync('./scrubbed/category/Weapons.json').map(a => a.title);
const weaponIds = weapons.map(a => a.toLocaleLowerCase().replace(/[^\w_-]+/g, '_').replace(/(^_+)|(_+$)/g, ''));
const luaWeapons = fs.readdirSync('./fetch-lua-data/Weapons').map(a => a.replace(/^(.+)\.json$/, '$1'));

const diff = weapons.filter((a, i) => !luaWeapons.find(b => b === weaponIds[i]));
fs.writeFileSync('remaining-items.txt', diff.join('\n'));
