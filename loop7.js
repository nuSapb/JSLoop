'use strict'

let draw = (n) => {
    let k = n*n
    for (let i = 0; i < n; i++) {
        let str = ''
        for (let j = 0; j < n; j++) {
            k--
            str += k+1
        }
        console.log(str)
    }

}

draw(3)