let x1 = () => console.log("Hi.......")

let x2 = () => {
  console.log("Hello......")
  console.log("Hey......")
}

let x3 = () => 100 * 2

const x4 = (a,b,c) => {
    console.log(a + b + c)
    return a * b 
}

let x5 = (z) => z + 500 
// let x5 = z => z + 500

x1()
// x3() ไม่มีอะไรเกิดขึ้น ค่าที่ส่งกลับมาไม่ได้เอาไปใช้ทำอะไรเลย
console.log(x3())
x3 = x1
x3()
x3 = x4
console.log(x4(1 ,2 ,3))
console.log(x3(10 ,20 ,30))
// x4 = x5 error เพราะ x4 เป็น const

