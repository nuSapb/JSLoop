'use strict'
let draw = (n) => {
    let k = n - 1 //4
    let cntDown = n-1
    let cntUp = 1
    for (let i = 0; i < n + n - 1; i++) {
        let str = ''
        for (let j = 0; j < n; j++) {
            if (i < n) {
                if (j <= i) {
                    str += cntUp
                } else {
                    str += '-'
                }
            } else {
                if (j < k) {
                    str += cntDown
                } else {
                    str += '-'
                }
            }

        }

        if (i >= n) {
            k--
            cntDown--
        }else {
            cntUp++
        }

        

        console.log(str)
    }
}

draw(3)