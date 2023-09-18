import{checkValidationPhone,getToken,sendTokenToSMS} from'./phone.js'  //phone.js에서 export한 함수들을 가져와서 사용!

console.log('안녕하세요~~');

function createTokenOfPhone(myphone, count) {              //api함수!
    // 1. 휴대폰번호 자릿수 맞는지 확인하기
    const isValid = checkValidationPhone(myphone);
    if (isValid) {
        // 2. 핸드폰 토큰 6자리 만들기
        const mytoken = getToken(count);

        // 3. 핸드폰번호에 토큰 전송하기
        sendTokenToSMS(myphone, mytoken);
    }
}

createTokenOfPhone('01012345678', 6);
