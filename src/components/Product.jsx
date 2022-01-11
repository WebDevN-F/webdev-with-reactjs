import styled from "styled-components";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 3;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease-in-out;
`

const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 340px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f5f2fb;
    position: relative;
    &:hover ${Info} {
        opacity: 1;
    }
`

const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: #fff;
    position: absolute;
`

const Image = styled.img`
    height: 75%;
    z-index: 2;
`

const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
    cursor: pointer;
    border: .5px solid transparent;
    transition: .3s ease-in-out;
    &:hover {
        background-color: transparent;
        color: #fff;
        border-color: #fff;
        transform: scale(1.3);
    }
`

const Product = ({item}) => {
    return (
        <Container>
            <Circle />
            <Image src={item.img} />
            <Info>
                <Icon>
                    <SearchOutlinedIcon />
                </Icon>
                <Icon>
                    <AddShoppingCartOutlinedIcon />
                </Icon>
                <Icon>
                    <FavoriteBorderOutlinedIcon />
                </Icon>
            </Info>
        </Container>
    )
}

export default Product
