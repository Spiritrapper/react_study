import { useState } from "react";


const State = () => {
    const [param1, setParam1] = useState("");
    const [param2, setParam2] = useState("");
    const func1 = () => {
        setParam1("안녕하세요");
    }

    const handleClick = () => {
        // 상태에 따라 func1을 토글
        if (param1 === "") {
          func1();
        } else {
          setParam1(""); // 혹은 다른 동작 수행
        }
      };
    const func2 = () => {
        setParam2("");
    }
    const textInput = (e) => {
        console.log(e);
        console.log(e.target.value);
        const {name, value} = e.target // 자바스크립트에 distructure
        console.log(name, value);
        setParam2(value);
    }

    return (
        <div className="state-page state">
            <h2>state.jsx</h2>
            <p >{param1}</p>
            {/*<button onClick={param1=="" ?{func1}:null}>버튼</button> */}
            <button onClick={handleClick}>버튼</button>
            <input type="text" onChange={textInput} name="param2"/>
            <p>입력값 : {param2}</p>
        </div>
    )
}

export default State;