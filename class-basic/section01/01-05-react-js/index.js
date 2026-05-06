const MainPage = () => {    

    const [구독자수담는통, 구독자수바꿔주는함수] = React.useState(0)

    const 구독자올리는기능 = () => {
        구독자수바꿔주는함수(구독자수담는통 + 1)
    }

    const 목록페이지보여주기 = () => {
        document.getElementById("목록페이지보여주는곳").style = "display: block;"
        document.getElementById("채널페이지보여주는곳").style = "display: none;"
    }

    const 채널페이지보여주기 = () => {
        document.getElementById("목록페이지보여주는곳").style = "display: none;"
        document.getElementById("채널페이지보여주는곳").style = "display: block;"
    }
   
    return (
        <div>
           <div>배너화면입니다</div>
           <div>
                <button onClick={목록페이지보여주기}>유튜브 목록</button>
                <button onClick={채널페이지보여주기}>유튜브 채널</button>                
           </div>

           <div id="목록페이지보여주는곳">
            <목록페이지 qqq={구독자수담는통}/>
           </div>
           <div id="채널페이지보여주는곳">
            <채널페이지 rrr={구독자수담는통} zzz={구독자올리는기능} />
           </div>
        </div>
    )
}