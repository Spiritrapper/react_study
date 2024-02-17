import React, {useState, useEffect} from "react";

function UserStatus(porops) {
    const [isOnline, setIsOnline] = useState(null);

    useEffect(() => {
        function handleStatusChange(status) {
            setIsOnline(status.isOnline);
        }

        ServerAPI.subscribeUserStatus(props.user.id, handleStatusChange);
        return ()=> {
            ServerAPI.unsubscribeUserStatus(props.user.id, handleStatusChange);
        };
    });

    if (isOnline === null) {
        return '대기중...';
    }
    return isOnline? '온라인' : '오프라인';
}
export default UserStatus;