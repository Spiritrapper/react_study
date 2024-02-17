import { useState } from "react";
import TemperatureInput from "./TemperaturInput";
import BoilingVerdict from "./BoilingVerdict";

function toCelsius(fahrenheit) {
    return (fahrenheit -32) * 5 /9;
}

function toFahrenheit(Celsius) {
    return (Celsius *9/5) +32;
}

function tryConvert(temperature, convert) {
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
    const [scale, setScale] = useState('c');

    const handleFahrenheitChange = (temperature) => {
        setTemperature(temperature);
        setScale('f');
    }

    const handleCelsiusChange = (temperature) => {
        setTemperature(temperature);
        setScale('c')
    }
    
    const celsius = scale=== 'f' ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale=== 'c' ? tryConvert(temperature, toFahrenheit) : temperature;


    return (
        <div>
            <TemperatureInput
                scale="c"
                temperature={celsius}
                onTemperaturChange={handleCelsiusChange}/>
            <TemperatureInput
                scale="f"
                temperature={fahrenheit}
                onTemperaturChange={handleFahrenheitChange}/>   
            <BoilingVerdict
                celsius={parseFloat(celsius)}/>               
        </div>
    )
}

export default Calculator;