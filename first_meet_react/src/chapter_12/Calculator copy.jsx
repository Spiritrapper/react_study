import { useState } from "react";

function toCelsius(fahrenheit) {
    return (fahrenheit -32) * 5 /9;
}

function toFahrenheit(Celsius) {
    return (Celsius *9/5) +32;
}

function tryConvert(temperature, Convert) {
    const input = parseFloat(temperature);
    if(Number.isNaN(input)) {
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000)/ 1000;
    return rounded.toString();
}



function Calculator(props) {
    const [temperature, setTemperature] = useState('');

    const handleChange = (event) =>{
        setTemperature(event.target.value)
    }

    return (
        <fieldset>
            <legend>섭씨 온도를 입력하세요</legend>
            {/* 변경전 :<input 
                value={temperature}
                onChange={handleChange}/>*/}
            <input 
                value={props.temperature}
                onChange={handleChange}/>
            <BoilingVerdict
                celcius={parseFloat(temperature)}/>
        </fieldset>
    )
}

export default Calculator;