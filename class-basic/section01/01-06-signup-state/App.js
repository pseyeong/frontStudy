const App = () => {    

    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [emailError, setEmailError] = React.useState("아직은 에러 없음")
 
    const onChangeEmail = (event) => {
        setEmail(event.target.value)

    }

    const onChangePassword = (event) => {
        setPassword(event.target.value)
    }

    const onClickSignup = (event) => {
        console.log(email, password)


        if(email.includes("@") === false){
            // alert('이메일이 올바르지 않습니다')
            // document.getElementById('passwordError').innerText = '이메일이 올바르지 않습니다'

            //state로 에러 보여주기
            setEmailError("이메일이 올바르지 않습니다")
        }else{
            // alert('회원가입이 완료되었습니다')
            // document.getElementById('passwordError').innerText = ''
        }
    }
    
    return (
        <div className="app">
            <h1>이메일 : </h1> <input type="text" onChange={onChangeEmail} />
            <br/>
            {/*<div id="passwordError"></div>*/}
            <div>{emailError}</div>
            <h1>비밀번호 : </h1> <input type="password" onChange={onChangePassword} />
            <button onClick={onClickSignup}>회원가입</button>
        </div>
    )
}