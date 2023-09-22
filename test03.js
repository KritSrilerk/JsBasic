// anonimus function 
let x1 = function() { // ไม่ต้องมีชื่อ
    console.log('AAA')
}

// arrow function
let x3 = () => { // ใช้ => แทน function
    console.log('CCC')
}

function b(){
    console.log('BBB')
}

b()
// a() เรียกไม่ได้เพราะมันเป็นการเอาไปกำหนดให้กับอะไรสักอย่างหนึ่ง
x1()
let x2 = x1
x2()
x3()
x2 = x3
x2()