import { useState } from 'react';

const Board = () => {
    const [writer, setWriter] = useState("")
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")

    const [isActive, setIsActive] = useState(false)

    const onChangeWriter = (e) => {
        setWriter(e.target.value)
    }
    
    const onChangeTitle = (e) => {
        setTitle(e.target.value)
    }
    
    const onChangeContent = (e) => {
        setContent(e.target.value)
    }

    const onChangeSubmit = () => {
        console.log(writer, title, content);

        if(setWriter === "" || setTitle === "" || setContent === ""){
            setIsActive(false)
        }else{
            setIsActive(true)
        }
        
        alert('게시글 등록에 성공')

    }
    
    // const buttonStyle = {
    //     backgroundColor: 'blue',
    // }

    return(
        <>
            작성자 : <input type="text" placeholder="작성자를 입력해주세요" onChange={onChangeWriter} />
            제목 :<input type="text" placeholder="제목을 입력해주세요" onChange={onChangeTitle}/>
            내용 :<input type="text" placeholder="내용을 입력해주세요" onChange={onChangeContent}/>
            <button onClick={onChangeSubmit} style={{backgroundColor: isActive === true ? 'blue' : 'none'}}>게시글 등록</button>
            {/* <button onClick={onChangeSubmit} style={buttonStyle}>게시글 등록</button> */}
        </>
    )
}

export default Board;