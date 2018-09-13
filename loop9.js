'use strict'

let draw = (n) => {
    let k = 2
    for (let i = 0; i < n; i++) {
        let str = ''
        str += i + k
        console.log(str)
        k++
    }

}

draw(5)