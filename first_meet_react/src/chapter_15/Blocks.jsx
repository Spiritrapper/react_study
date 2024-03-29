import styled from "styled-components";

const Wrapper = styled.div`
    padding: 1rem;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    background-color: lightgrey;
`;

const Block = styled.div`
    padding: ${(props) => props.padding};
    border: 1px solid black;
    border-radius: 1rem; 
    background-color:${(props) => props.backgroundColor}:
    color: white;
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
`;

const blockItems = [
    {
        label: "1",
        padding: "1rem",
        backgroundColor1: "red",
    },
    {
        label: "2",
        padding: "3rem",
        backgroundColor1: "green",
    },
    {
        label: "3",
        padding: "2rem",
        backgroundColor1: "red",
    },
];

function Blocks(props) {
    return (
        <Wrapper>
            {blockItems.map((blockItem)=>{
                return (
                    <Block 
                        padding={blockItem.padding}
                        backgroundColor1={blockItem.backgroundColor1}
                    >   
                        {blockItem.label}

                    </Block>
                )
            })}
        </Wrapper>
    )
}

export default Blocks;