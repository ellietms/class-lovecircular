/*

=	x = y	x = y
+=	x += y	x = x + y
-=	x -= y	x = x - y
*=	x *= y	x = x * y
/=	x /= y	x = x / y
%=	x %= y	x = x % y
**=	x **= y	x = x ** y

*/


// string , number 



let result = a / b
console.log(result) 


let c = 4

let sum =  (( a - c)  * b) 

console.log(sum)

let a = 1
let b = 2

let result2 = ( a += b) // a = a + b 
console.log(a)
console.log(b)

console.log("======")

result2 = (b += a)  // b (5) = b (2) + a (3)
console.log(a) // 3
console.log(b) // 5


console.log("=====")

result3 = (b -= 1) // b = b -1
console.log(b) // 4

result3 = (a -= b) // -1 => a = a()3 -  b(4)
console.log(a) // -1

result3 = (b /= 2) // b = b / 2
console.log(b) //2


result3 = (b **= 4) // b = b ** 4
console.log(b)  // 16

let d = 33 
let result4 = d %= b // d = d % b
console.log("THIS", result4)  // 33 / 16 ==> 



// && , === , == , < , <= , > , >= , ||, !==  // 

 // && =>   true and true => true , false and true => false , false and false => false

 // || =>  true or true => true , true or false => true , false or false => false 

if(2 < 3 || 3 > 10){  
    console.log("Yes")  
}
else if( 2 !== "2"){
    console.log("NO")
}

