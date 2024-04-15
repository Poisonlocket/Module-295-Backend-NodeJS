
let sum= 0
let i = 2
for (let i=2; i < process.argv.length; i++){
    sum += parseInt(process.argv[i])
}

console.log(sum)