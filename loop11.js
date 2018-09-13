'use strict'
let draw = (n) => {
    for (let i = 0; i < n; i++) {
        let str = ''
        for (let j = 0; j < n; j++) {
            j === i ? (str += '-') : (str += '*')
        }
        console.log(str)
    }
}

draw(3)