//asynchronous
const { readFile, writeFile } = require('fs')
console.log('start')

readFile('./content/try.txt','utf8',(err,result)=>{
    if(err){
        console.log(err)
        return
    }
    const first = result
    readFile('./content/subfolder/test.txt','utf8',(err,result2)=>{
        if(err){
            console.log(err)
            return
        }
        const second = result2
        writeFile('./content/output.txt',`here is the result: ${first},${second}`,(err,result3)=>{
            if(err){
                console.log(err)
                return
            }
            //gives undefined if you try to print result why?
            console.log(result);
            console.log('done with this task')

        })

    })
})

console.log('code ended');


//1:32:26
