function parimpar(n){
    if(n%2==0){
        return 'Number Pair'
    }else{
        return 'Number odd'
    }
}

let res = parimpar(5)
console.log(res)


//*****************************************/




//Sum

function sum(n1=0,n2=0){
    return n1 + n2
}

console.log(sum(2,10))


//multiply

let a = function(x){
    return x*2

}

console.log(a(12))


//factorial, c = counting(contador)

function factorial(n){
    let fat = 1
    for(let c= n; c > 1; c--){
        fat*= c
    }
    return fat
}
 console.log(factorial(10))



 /// recursion

 function fatorial(n){
     if(n ==1){
        return 1
     }else{
         return n * fatorial(n-1)
     }
 }

 console.log(fatorial(5))


