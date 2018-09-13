'use strict'
let draw = (n) => {
    for (let i = 1; i <= n; i++) {
        let str = ''
        for (let j = n; j > 0; j--) {
            j > i ? (str += '-') : (str += '*')
        }
        console.log(str)
    }
}

draw(4)