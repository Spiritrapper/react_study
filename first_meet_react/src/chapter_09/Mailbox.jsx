
function Mailbox(props){
    const unreadMessages = props.unreadMessages;

    return (
        <div>
            <h1>
                안녕하세요
            </h1>
            {/*unreadMessage길이가 0 보다 작으면 &&연산자의해 출력이 안될것이다. */}
            {unreadMessages.length > 0 &&
                <h2>
                    현재 {unreadMessages.length}개의 읽지 않은 메세지가 있습니다.
                </h2>
            }
        </div>
    )
}