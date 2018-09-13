'use strict'
let draw = (n) => {
    for (let i = 1; i <= n; i++) {
        let str = ''
        for (let j = n; j > 0; j--) {
            i+1 > j ? (str += '*') : (str += '-')
        }
        console.log(str)
    }
}

draw(3)