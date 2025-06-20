import Header from "./Header.jsx";
import './Test.css';

//컴포넌트 생성

function Test(){
    return (
        <> 
            <Header />
            <Aside />
            <h1>Test 컴포넌트</h1>
        </>
    )
}

//다른 컴포넌트에서 해당 Test컴포넌트 사용기능히도록 내보내기 설정
export default Test;
//자식 컴퍼넌트
function Aside(){
    return(
        <aside>
            <p>Aside</p>
            <h1>서브메뉴</h1>
        </aside>
    )
  }