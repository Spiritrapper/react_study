

function Page(props) {
    const user = props.user;

    const userLink = (
        <Link href={user.permalink}>
            <Avatar user={user} size={props.avatarSize}/>
        </Link>
    )
    
    // Page 컴포넌트는 PageLayout 컴포넌트를 렌더링
    // 이때 props로 userLink를 함께 전달함
    return <PageLayout userLink={userLink}/>;
    
}

// PageLayout 컴포넌트는 NavigationBar컴포넌트를 렌더링
<PageLayout userLink={...}/>

// NavigationBar 컴포넌트는 props로 전달받은 userLink element를 리턴
<NavigationBar userLink={...}/>


function Page(props) {
    const user = props.user;

    const topBar = (
        <NavigationBar>
        <Link href={user.permalink}>
            <Avatar user={user} size={props.avatarSize}/>
        </Link>
        </NavigationBar>
    );
    const content = <Feed user = {user}/>
    
    // 하위 컴포넌트를 여러개의 변수로 나눠서 전달!
    return (
        <PageLayout 
            topBar={topBar}
            content={content}
        />
    )
    
}