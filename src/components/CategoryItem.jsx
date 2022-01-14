import styled from "styled-components";

const Container = styled.div`
    flex: 1;
    height: 70vh;
    margin: 3px;
    position: relative;
`

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.5);
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Title = styled.h3`
    font-size: 48px;
    color: coral;
    margin-bottom: 20px;
    text-align: center;
`

const Button = styled.button`
    background-color: #fff;
    border: .5px solid #eee;
    color: coral;
    outline: none;
    font-size: 20px;
    font-family: 'Myriad Pro Semibold';
    font-weight: normal;
    padding: 10px;
    cursor: pointer;
    transition: all .5s;
    &:hover {
        color: #fff;
        background-color: transparent;
    }
`

const CategoryItem = ({item}) => {
    console.log(item)
    return (
        <Container>
            <Image src={item.img} />
            <Info>
                <Title>{item.title}</Title>
                <Button>SHOP NOW</Button>
            </Info>
        </Container>
    )
}

export default CategoryItem
