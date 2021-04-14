const e = require("express")

for (var i = 0; i < 100; i++) {
    // print fizz if i is a multiple of 5
    // print buzz if i is a multiple of 10
    // print fizzbuzz if i is a multiple of 15
    // else print i

    // 1 / 5 === 0 r 1 
    // ...
    // 4 / 5 === 0 r 4 
    // 5 / 5 === 1 r 0 
    // ....
    // 13 / 5 === 2 r 3

    // if (i % 15 === 0) {
    //     console.log("fizzbuzz")
    // }
    // else if (i % 10 === 0) {
    //     console.log("buzz")
    // }
    // else if (i % 5 === 0) {
    //     console.log("fizz")
    // }
    // else {
    //     console.log(i)
    // }


    // if i === 3
    //  011
    // &001
    //  001
    if(i & 1){
        console.log("even")
    } else {
        console.log(i)
    }
}