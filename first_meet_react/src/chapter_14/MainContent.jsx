import React ,{ useContext } from "react";
import ThemeContext from "./ThemeContext";

function MainContent(props) {
    const {theme, toggleTheme} = useContext(ThemeContext);//useContext변수로 객체만 사용가능

    return (
        <div
            style={{
                width: "100vw",
                height: "100vh",
                padding: "1.5rem",
                backgroundColor: theme == "light" ? "white" : "black",
                color: theme == "light" ? "black" : "white",
                
            }}
        >
            <p>안녕하세요 웹사이트</p>
            <button onClick={toggleTheme}>테마변경</button>

        </div>
    )
}

export default MainContent;