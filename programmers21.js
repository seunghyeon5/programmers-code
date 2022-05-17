function solution(s) { 
    var answer = s.split(" "); 
    let result = []; 
    for(let an of answer){ 
        for(let i=0; i<an.length; i++){ 
            if(i%2 === 0){ 
                result.push(an[i].toUpperCase()); //짝수일경우 대문자
            }else{ 
                result.push(an[i].toLowerCase()); } //홀수일경우 소문자
        } 
        result.push(" "); } //한 단어 끝나면 띄어쓰기 추가 
        result.pop(); //배열의 마지막 요소인 띄어쓰기 없애기      
    return result.join(""); //배열 모든요소를 문자열로 합치기 
}