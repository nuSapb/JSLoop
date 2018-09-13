'use strict'

let draw = (n) => {
    let k = 0
    for (let i = 0; i < n; i++) {
        let str = ''
        for (let j = 0; j < n; j++) {
            k++
            str += k
        }
        console.log(str)
    }

}

draw(4)