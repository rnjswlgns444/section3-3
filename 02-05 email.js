export function checkValidationEmail(email){
  if(email === undefined || !email.included("@")){
    console.log("에러발생! 이메일을 제대로 입력해 주세요!")
    return false
  } else{
    return true
  }
}

export function getWelcomeTemplate({name, age, school}){
  return `
    <html>
      <body>
        <h1>${name}님 강비을 환영합니다!</h1>
        <hr/>
        <div>이름: ${name}</div>
        <div>나이:${age}살</div>
        <div>학교: ${school}</div>
        <div>가입일: 2020-02-01</div>
        </body>
        </html>
      `
}

export function sendTemplateToEmail(email, mytemplate){
  console.log(email +  "이메일로" + mytemplate + "를 전송합니다.")
}
