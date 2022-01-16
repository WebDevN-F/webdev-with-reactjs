import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const TextContainer = styled.h1`
    color: royalblue;
    font-size: 30px;
`

const Loading = () => {
    return (
        <Container>
            <TextContainer>
                Loadding...
            </TextContainer>
        </Container>
    )
}

export default Loading
