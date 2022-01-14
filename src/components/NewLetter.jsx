import styled from "styled-components"
import SendIcon from '@mui/icons-material/Send';
import { mobile } from '../Responsive'

const Container = styled.div`
    background-color: #f5f2fb;
    height: 60vh;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const Title = styled.h1`
    font-size: 70px;
    font-family: 'Myriad Pro Semibold';
    font-weight: normal;
    text-transform: uppercase;
    margin-bottom: 20px;
    ${mobile({ fontSize: "40px" })}
`

const Description = styled.div`
    font-size: 24px;
    font-weight: 300;
    font-family: 'Myriad Pro Light';
    margin-bottom: 20px;
    text-align: center;
    letter-spacing: 3px;
    ${mobile({ fontSize: "20px" })}
`

const InputContainer = styled.div`
    width: 50%;
    height: 50px;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 5px;
    border: 1px solid lightgray;   
    ${mobile({ width: "100%" })} 
`

const Input = styled.input`
    font-size: 20px;
    border: none;
    padding: 0 20px;
    outline: none;
    width: 100%;
    height: 100%;
    flex: 8;
    letter-spacing: 3px;
`

const Button = styled.button`
    flex: 1;
    background-color: coral;
    color: #fff;
    outline: none;
    border: none;
    font-size: 20px;
    font-family: 'Myriad Pro Semibold';
    font-weight: normal;
    padding: 10px;
    cursor: pointer;
    transition: all .5s;
` 

const NewLetter = () => {
    return (
        <Container>
            <Title>
                New Letter
            </Title>
            <Description>
                lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Description>
            <InputContainer>
                <Input placeholder="Your email"></Input>
                <Button>
                    <SendIcon />
                </Button>
            </InputContainer>
        </Container>
    )
}

export default NewLetter
