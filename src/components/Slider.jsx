import styled from "styled-components"
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import { useState } from "react";
import { sliderData } from "../data";
import { mobile } from "../Responsive";

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
    ${mobile({ display: "none"})}
`

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #f5f5f5;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    margin: auto;
    opacity: 0.5;
    transition: opacity .5s;
    cursor: pointer;
    &:hover {
        opacity: 1;
    }
    z-index: 2;
`

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transform: translateX(${props => props.translateX * -100}vw);
    transition: transform 1.25s;
`

const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: #${props => props.bg};
`

const ImgContainer = styled.div`
    width: 100%;
    height: 100%;
    flex: 1.5;

`

const Image = styled.img`
    width: 100%;
    height: 100%;
`

const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`
const Title = styled.h1`
    font-size: 70px;
    font-family: 'Myriad Pro Semibold';
    font-weight: normal;
    text-transform: uppercase;
    color: #333;
` 
const Description = styled.p`
    margin: 50px 0;
    font-size: 20px;
    font-family: 'Myriad Pro Light';
    font-weight: 500;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: #333;
` 
const Button = styled.button`
    background-color: transparent;
    border: .5px solid #eee;
    color: #333;
    outline: none;
    font-size: 20px;
    font-family: 'Myriad Pro Semibold';
    font-weight: normal;
    padding: 10px;
    cursor: pointer;
    transition: all .5s;
    &:hover {
        color: coral;
        background-color: #fff;
    }
` 

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    
    const handerClick = (direction) => {
        console.log(direction)
        const length = sliderData.length - 1;
        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : length); 
        } else {
            setSlideIndex(slideIndex < length ? slideIndex + 1 : 0); 
        }
    }
    return (
        <Container>
            <Arrow direction="left" onClick={() => handerClick("left")}>
                <ArrowLeftOutlinedIcon />
            </Arrow>
            <Wrapper translateX={slideIndex}>
                {sliderData && sliderData.length > 0 && sliderData.map((slide, index) => {
                    return (
                        <Slide key={index} bg={slide.bg}>
                            <ImgContainer>
                                <Image src={slide.img} />
                            </ImgContainer>
                            <InfoContainer>
                                <Title>{slide.title}</Title>
                                <Description>{slide.desc}</Description>
                                <Button>{slide.button}</Button>
                            </InfoContainer>
                        </Slide>
                    )
                })}
            </Wrapper>
            <Arrow direction="right" onClick={() => handerClick("right")}>
                <ArrowRightOutlinedIcon />
            </Arrow>
        </Container>
    )
}

export default Slider
