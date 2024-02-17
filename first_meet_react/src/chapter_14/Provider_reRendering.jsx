import { useState } from "react"

// Provider 컴포넌트가 재렌더링될 때마다 모든하위 consumer 컴포넌트가 재렌더링됨.
function App(props) {
    return (
        <ThemeContext.Provider value={{something:'something'}}>
            <Toolbar/>
        </ThemeContext.Provider>
    )
}

// 왜냐하면 Value Prop을 위한 새로운 객체가 매번 새롭게 생성되기 때문입니다
//이를 방지하기 위해서는 Value를 직접 넣는 것이 아닌 컴포넌트의 State로 옮기고 해당 State의 값을 넣어 주어야 합니다
function App(props) {
    const [value, setValue] = useState({something:'something'});

    return (
        <ThemeContext.Provider value={value}>
            <Toolbar/>
        </ThemeContext.Provider>
    )
}