function solution(n) {
    for(let i = 0; i**2 <= n; i++){
        if(n == i**2){
            return (i+1)**2;
        }
    }
    return -1;
}

let n = 4
console.log(solution(n))
