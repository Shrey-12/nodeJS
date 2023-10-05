// Modules 
//common js , every file is module (by default)
// modules - encapsulated code (only share minimum)
const names = require('./3')
const sayHi= require('./3_2')

require('./5')


sayHi(names.shreya)
sayHi(names.anant)