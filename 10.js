const { readFileSync,writeFileSync } = require('fs')
console.log('start')

const first = readFileSync('./content/try.txt','utf8');
const second = readFileSync('./content/subfolder/test.txt','utf8');

writeFileSync('./content/output.txt',`Here is the result:${first}, ${second}`,{ flag: 'a' })
console.log('done with my task');
console.log('starting the next one');
