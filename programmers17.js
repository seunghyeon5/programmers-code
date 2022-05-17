function solution(s) {
    if (!(s.length == 4 || s.length == 6)) // 문자열의 길이가 4또는 6이 아닌 경우 모두 false
        return false;
    for (let i = 0; i < s.length; i++){
        if (!(s[i] >= "0" && s[i] <= "9")){ // 대소비교를 통해서 문자가 들어간경우 false 출력
            return false;
        }     
    }
    return true;
}