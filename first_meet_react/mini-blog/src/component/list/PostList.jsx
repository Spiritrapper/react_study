import React from "react";
import styled from "styled-components";
import PostListItem from "./PostListItem";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%; // 원하는 높이로 변경

    & >* {
        :not(:last-child) {
            margin-bottom: 16px;
        }
    }
`;


function PostList(props) {
    const {post, onClickItem} = props;

    return (
        <Wrapper >
            {post.map((post, index)=>{
                return (
                    <PostListItem
                        key={post.id}
                        post={post}
                        onClick={() => {
                            onClickItem(post);
                        }}
                    />
                )
            })}
        </Wrapper>
    )
}
export default PostList;