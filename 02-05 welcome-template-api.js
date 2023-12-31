import { checkValidationEmail, getWelcomeTemplate, sendTemplateToEmail } from './email.js
// 01-05에 있는 제이슨 패키지 필요!
function createUser(user){
  //1.이메일이 정상인지 확인(1-존재여부, 2-"@"포함여부
  const isValid = checkValidationEmail(user.email)
  if(isValid){
    //2. 가입환영 템플릿 만들기
    const mytemplate = getWelcomeTemplate(user)

    //3. 이메일에 가입환영 템플릿 전송하기
    sendTemplateToEmail(user.email, mytemplate)
  }
}
const myuser = {
  name: "철수",
  age: 8,
  school: "다람쥐초등학교",
  email: :a@a.com",
}
createUser(myuser)
