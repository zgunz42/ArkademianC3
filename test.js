const soal1 = require('./soal1');
const soal2 = require('./soal2');
const soal3 = require('./soal3');
const soal4 = require('./soal4');
const soal5 = require('./soal5');
console.log('\n\tJawaban Untuk Soal No.1\n');
console.log(JSON.stringify(soal1.profile));
console.log('\n\tJawaban Untuk Soal No.2\n');
console.log('zeronull', '=>', soal2.is_username_valid('zeronull') ? 'valid' : 'invalid');
console.log('z.ronull', '=>', soal2.is_username_valid('z.ronull') ? 'valid' : 'invalid');

console.log('zeronll', '=>', soal2.is_username_valid('zeronll') ? 'valid' : 'invalid');
console.log('z.ronll', '=>', soal2.is_username_valid('z.ronll') ? 'valid' : 'invalid');

console.log('adi_gunawan@live.com', '=>', soal2.is_email_valid('adi_gunawan@live.com') ? 'valid' : 'invalid');
console.log('an@live.com', '=>', soal2.is_email_valid('an@live.com') ? 'valid' : 'invalid');
console.log('a.sn@live.com', '=>', soal2.is_email_valid('a.sn@live.com') ? 'valid' : 'invalid');
console.log('a.sn@livecom', '=>', soal2.is_email_valid('a.sn@livecom') ? 'valid' : 'invalid');

console.log('\n\tJawaban Untuk Soal No.3\n');
soal3.cetak(2);

console.log('\n\tJawaban Untuk Soal No.4\n');
soal4.cetak_gambar();
var data = [
  ['a','c','b','e','d'],
  ['g','e','f']
];

var dataLain = [
  ['g','h','x','j'],
['a','c','b','e','d'],
['q','w','a']
];

var dataNestList = [
  ['g','h','x','j'],
[['a','c','b'],['e','d']],
[['q','w','a'], [['x'], ['z']]]
];

console.log('\n\tJawaban Untuk Soal No.5\n');
soal5.sort_array(data);
console.log(data);

soal5.sort_array(dataLain);
console.log(dataLain);

soal5.sort_array(dataNestList);
console.log(dataNestList);