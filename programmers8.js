function solution(phone_number) {
    var answer = '';
    for(let i=0; i < phone_number.length; i++){ //반복문을 이용해 핸드폰번호가 늘어나게끔 지정
      if(i < phone_number.length -4){ // 조건문을 이용해서 첫번호 부터 뒷번호에서 -4까지 지정
          answer += "*"; // 첫번호부터 *를 이용하여 문자를 가리게끔
      }else{
          answer += phone_number[i]; //나머지 부분은 번호가 들어가게
      }
  }
  return answer;
}