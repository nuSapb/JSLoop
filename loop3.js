'use strict'

let draw = (n) => {
    for (let i = 0; i < n; i++) {
        let str = ''
        for (let j = 1; j <= n; j++) {
            str += j
        }
        console.log(str)
    }

}

draw(4)