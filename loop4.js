'use strict'

let draw = (n) => {
    for (let i = 1; i <= n; i++) {
        let str = ''
        for (let j = 0; j < n; j++) {
            str += i
        }
        console.log(str)
    }

}

draw(4)