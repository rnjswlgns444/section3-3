export function checkValidationEmail(email){
  if(email === undefined || !email.included("@")){
    console.log("에러발생! 이메일을 제대로 입력해 주세요!")
    return false
  } else{
    return true
  }
}

export function getWelcomeTemplate({name, age, school}){
  const createdAt = new Date()               //이것은 다른 곳에서도 자주 사용될 수 있기 때문에 util.js를 따로 만들어서 쓰는게 좋음!
  const year = createdAt.getFullYear()
  const month = createdAt.getMonth() +1
  const date = createdAt.getDate()
  //const today = year + "-" + month + "-" + date
  const today = `${year}-#{month}-${date}`

  
  return `
    <html>
      <body>
        <h1>${name}님 강비을 환영합니다!</h1>
        <hr/>
        <div>이름: ${name}</div>
        <div>나이:${age}살</div>
        <div>학교: ${school}</div>
        <div>가입일: ${getToday()}</div>
        </body>
        </html>
      `
}

export function sendTemplateToEmail(email, mytemplate){
  console.log(email +  "이메일로" + mytemplate + "를 전송합니다.")
}
