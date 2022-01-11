import styled from "styled-components"

const Container = styled.div`
    display: flex;
    padding: 10px;
    justify-content: center;
    align-items: center;
    text-align: center;
`

const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <Container>
            <p>© {year} All rights reserved. By <a href="#">Nguyen Van Nam</a></p>    
        </Container>
    )
}

export default Footer
