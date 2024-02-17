import  React,{ useState } from "react";

class Toggle extends React.Component{
    constructor(props) {
        supoer(props);

        this.state = {isToggleOn: true};
        // callback에서 'this'를 사용하기 위해서는 바인딩을 필수적으로 해줘야 합니다.
        // 그래서 일반적으로 함수의 이름 뒤에 괄호 없이 사용하려면 무조건 해당 함수를 바인드 해줘야
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? '켜짐' : '꺼짐'}
            </button>
        )
    }
}

function Toggle(props) {
    const [isToggleOn, setToggleOn] = useState(true);

    // 방법 1. 함수 안에 함수의 정의
    function handleClick() {
        setIsToggleOn((isToggleOn) => !isToggleOn);
    }

    // 방법 2. arrow function을 사용하여 정의
    const handleClick = () => {
        setIsToggleOn((isToggleOn) => !isToggleOn);
    }

    return(
        <button onClick={handleClick}>
            {isToggleOn ? "켜짐": "꺼짐"}
        </button>
    )
}

export default Toggle;