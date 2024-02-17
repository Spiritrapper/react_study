import React from "react";
import { useState } from "react";

const scaleNames = {
    c:'섭씨',
    f:'화씨'
}

function TemperatureInput (props) {
    {/*const [temperature, setTemperature] = useState(''); */}

    const handleChange = (event) =>{
        {/** setTemperature(event.target.value)*/}
        {/* onTemperaturChange 속성을 만듦*/}
        props.onTemperaturChange(event.target.value)
    }

    return (
        <fieldset>
            <legend>온도를 입력해 주세요(단위:{scaleNames[props.scale]}):</legend>
            <input 
                value={props.temperature}
                onChange={handleChange}/>
        </fieldset>
    )
}

export default TemperatureInput;