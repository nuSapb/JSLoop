'use strict'

let draw = (n) => {
    for (let i = 1; i <= n; i++) {
        let str = ''
        for (let j=0; j<n; j++) {
            str += (i*j) + i
            
        }
        console.log(str)
    }

}

draw(3)