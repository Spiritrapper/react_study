import React from "react";
import { useState } from "react";

function RequestForm(props) {

    const [value, setValue] = useState('요청사항입력');

    const handleChange =(event) => {
        setValue(event.target.value);
    }

    const handleSubmit = (event) => {
        alert('입력한 요청사항 :' + value);
        event.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                요청사항:
                <input type="text" value={value} onChange={handleChange}/>
            </label>
            <button type="submit">제출</button>
        </form>
    )
}
export default RequestForm;