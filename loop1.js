'use strict'
let str = ''
let draw = (n) => {
    for (let i=0; i<n; i++) {
        str += '*'
    }
    console.log(str)
}

draw(2)
