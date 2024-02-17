import React, { useState, useCallback } from "react";
import ThemeContext from "./ThemeContext";
import MainContent from "./MainContent";


function DarkOrLight(props) {
    const [theme, setTheme] = useState("light")

    const toggleTheme = useCallback(() => {
        if(theme == "light") {
            setTheme("dark");
        }else if (theme == "dark") {
            setTheme("light")
        }
    }, [theme]); 
   
    {/* const toggleTheme = useCallback(() => {
        // Toggle between "light" and "dark" themes
        setTheme(prevTheme => prevTheme === "light" ? "dark" : "light");
    }, []); */}
   

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            <MainContent/>
        </ThemeContext.Provider>
    )
}

export default DarkOrLight;