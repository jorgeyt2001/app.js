const R6API = require('r6api.js');
const r6 = new R6API('orantes404@gmail.com', 'Juanyt2001esp');
 
const username = 'corito_4_.free';
const id = await r6.getId('uplay', username).then(el => el[0].id);
const stats = await r6.getStats('uplay', id).then(el => el[0]);
 
console.log(`${username} has played ${stats.pvp.general.matches} matches`);