'use strict'



let draw = (n) => {
    for (let i=0; i<n; i++) {
        let str = ''
        for (let j=n; j>0; j--) {
            str += '*'
        }
        console.log(str)
    }
    
}

draw(2)