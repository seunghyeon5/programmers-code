function solution(a, b) {
    let result = 0;
    let day = ['FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED', 'TUE'] // 날짜 배열
    let month = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31] // 일수 배열
    for (let i = 0; i < a-1; i++){ //인덱스 값은 0부터 시작이므로 a-1을 넣음
        result += month[i];
    }
    
result += b-1; // 1월 1일은 금요일이 나와야함으로 b-1을 넣음

let answer = day[result%7];
return answer;    
}