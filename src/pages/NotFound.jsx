import React from 'react'
import {
    Link
} from "react-router-dom";
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Title = styled.h1`
    color: cornflowerblue;
`

const LinkItem = styled.span`
    > a {
        text-decoration: none;
        color: cornflowerblue;
    }
`

const NotFound = () => {
    return (
        <Container>
            <Title>404 Not Found!</Title>
            <LinkItem>
                <Link to="/">Go Home</Link>
            </LinkItem>
        </Container>
    )
}

export default NotFound
