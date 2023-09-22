// function
//----1
function funcA(){
    console.log('Hello....')
}

//----2
function funcB(x,y){
    console.log(x + y)
}

//----3
function funcC(){
    console.log("Hi....")
    return 'Wow Wow Wow'
}

//----4
function funcD(x,y){
    return `Hi..... ${x+y}`
    // return `Hi..... ${x+y}'
}

funcA()
funcB(10, 20)
console.log(funcC())
console.log(funcD(100,5))