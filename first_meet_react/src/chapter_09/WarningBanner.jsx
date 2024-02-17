import React from "react";

function WarningBanner(props) {
    if(!props.warning) {
        return null; // 특정 컴포넌트를 렌더링 하고 싶지 않을 때 null값을 사용
    }

    return (
        <div>경고!</div>
    )
}

export default WarningBanner;