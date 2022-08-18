"use strict"

// let x = prompt("Гроші");




// if (x == 0 ){
//     alert("жлоб")
//     console.log(x)
// }else if (x >= 10){   
//     alert("це в гривнях?")
//     console.log(x) 
// }else if(x < 10){
//     for (x; x < 11; x++)
//     console.log(x)
//     alert("ось в чому проблема")
// }




// alert("Hello World!")
// let a = prompt("First")
// a = +a
// let b = prompt("Second")
// b = +b
// function calcSum(a, b){
    
//     alert(a + b)
//     return a + b
// }
//  calcSum(a, b)
// let func = calcSum
// function sum(){
//     a = prompt("3")
//     a = +a
//     b = prompt("4")
//     b = +b
//     calcSum(a, b)
// }
// sum()

// function sum2(){
//     let c = prompt("5")
//     c = +c
//     let d = prompt("6")
//     d = +d
//     a = c
//     b = d
//     calcSum(a, b) 
//     sum()   
// }
// sum2()


let arr = [10, 'some string', false, true, 'undefined']
let index = arr.indexOf(false)
if (index !== -1){
    arr.splice(index, 1)
}
arr.pop()
alert (arr)
console.log(arr)

