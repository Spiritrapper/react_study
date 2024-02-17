import React from "react";

import Notification from "./Notification";

const reservedNotifications = [

    {
        id:1,
        message:"안녕"
    },
    {
        id:2,
        message:"잘가"

    },
    {
        id:3,
        message:"시작"

    },

]


class NotificationList extends React.Component {
    constructor(props) {
        super(props);

        this.state={
            notifications : [],

        };
    }

    componentDidMount() {
        const {notifications} = this.state;
        const timer = setInterval(()=> {
            if (notifications.length < reservedNotifications.length) {
                const index = notifications.length;
                notifications.push(reservedNotifications[index]);
                this.setState(
                    {
                        notifications: notifications,
                    }
                );
            }else {
                // 알림추가가 끝나면 notification 지우기
                this.setState({
                    notifications:[],
                });
                clearInterval(timer);
            }
        }, 1000);
    }
    render() {
        return (
            <div>
                {this.state.notifications.map((notification)=> {
                    return <Notification 
                        key={notification.id}
                        id={notification.id}
                        message={notification.message}
                    />
                })}
            </div>
        )
    }
}


export default NotificationList;