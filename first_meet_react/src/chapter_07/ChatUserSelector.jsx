import { useState } from "react";
import useUserStatus from "./useUserStatus";

const userList =[
    {id: 1, name:'인제'},
    {id: 2, name:'마이크'},
    {id: 3, name:'스티브'},

];

function ChatUserSelector(props) {
    const [userId, setUserId] = useState(1);
    const isUserOnline = useUserStatus(userId);

    return (
        <>
            <circle color = {isUserOnline? 'green' : 'red'}/>
            <select 
            value={userId0}
            onChange={event => setUserId(Number(event.target.value))}
            >
                {userList.map(user => (
                    <option key={user.id} value={user.id}>
                        {user.name}
                    </option>
                ))}

            </select>
                 
        </>
    )
}