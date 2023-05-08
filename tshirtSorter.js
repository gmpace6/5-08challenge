function tshirtSorter (string) {
    let xlVar = []
    let xxlVar = []
    let xxxlVar = []
    let xsVar = []
    let xxsVar = []
    let xxxsVar = []
    let sVar = []
    let mVar = []
    let lVar = []
    for (let i = 0; i < string.length; i++) {
    if (string[i] === 'x' && (string[i+1] === 's')) {
        xsVar.push(string[i],string[i+1])
            console.log(xsVar)
    } else if (string[i] === 's') {
        sVar.push(string[i] = string[i+1])
        console.log(sVar)
    } else if 
    (string[i] === 'm') {
        mVar.push(string[i])
    } else if
    (string[i] === 'l') {
        lVar.push(string[i])
    }
}
let sJoin = sVar.join('')
let mJoin = mVar.join('')
let lJoin = lVar.join('')
return sJoin + mJoin + lJoin
}
console.log(tshirtSorter('lslxsxlmxxssllsms'))

// const tshirtSorter1 = (string) => string.toLowerCase().trim().split("").sort().reverse().join("")
// console.log(tshirtSorter1("mlsslmmlsslmmsllsss"))

