import styled from "styled-components"

const Container = styled.div`
    height: 30px;
    background: brown;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
`

const Announcement = () => {
    return (
        <Container>
            Supper Deal! Free Shipping on Orders Over $50
        </Container>
    )
}

export default Announcement
