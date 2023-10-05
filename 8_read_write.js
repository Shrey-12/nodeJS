const {readFileSync,writeFileSync} = require('fs')

const first = readFileSync('./content/try.txt','utf8')
const second = readFileSync('./content/subfolder/test.txt','utf8')

console.log(first,second)

writeFileSync('./content/output.txt',`here is the result: ${first},${second}`)

