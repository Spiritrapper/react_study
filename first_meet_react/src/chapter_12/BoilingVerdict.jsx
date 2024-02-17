import React from "react";

function BoilingVerdict(props) {
    if(props.celsius >= 100) {
        return <p>물이 끓습니다.</p>;
    }
    return <p>물이 끊지 않습닏.</p>
}

export default BoilingVerdict;