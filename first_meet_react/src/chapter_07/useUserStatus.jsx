import React, {useState, useEffect} from "react";

// Custom Hook이름은 꼭 use로 시작한다.
function useUserStatus(userId) {
    const [isOnline, setIsOnline] = useState(null);

    useEffect(() => {
        function handleStatusChange(status) {
            setIsOnline(status.isOnline);
        }

        ServerAPI.subscribeUserStatus(userId, handleStatusChange);
        return ()=> {
            ServerAPI.unsubscribeUserStatus(userId, handleStatusChange);
        };
    });

    return isOnline;
}

export default useUserStatus;