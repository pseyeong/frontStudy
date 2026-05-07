import { Link } from 'react-router-dom';

const Aaa = () => {
    return(
        <div>
            <div>Aaa 페이지 입니다</div>
            {/* 리액트 이동 방식  */}
            <Link to="/bbb">Bbb 페이지로 이동</Link>
        </div>
    )
}

export default Aaa;