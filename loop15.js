'use strict'
let draw = (n) => {
    let k = n-1 //4
    for (let i = 0; i < n+n-1; i++) {
        let str = ''
        for (let j = 0; j < n; j++) {
            if( i < n) {
                if( j <= i) {
                    str += '*'
                } else {
                    str += '-'
                }
            } else {
                if( j < k) {
                    str += '*'
                } else {
                    str += '-'
                }
            }
            
        }
   
        if( i >= n) {
            k--
        }

        console.log(str)
    }
}

draw(8)