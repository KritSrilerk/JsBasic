//string
console.log("SAU")
console.log('CS')
console.log(`DTI`) // alt+9+6

// var let const
let x1 = 10
var x2 = 20
const c1 = 100

function funcA(){
    {
        let x3 = 30 // local
        const c2 = 200 // local
        var x4 = 40 // global

        x3 = 100
        // c2 = 400 error
        x4 = 300

        console.log(x3)
        console.log(c2)
        console.log(x4)
    }
    // console.log(x3) error
    // console.log(c2) error
    console.log(x4)
    console.log(x1)
}

funcA()



