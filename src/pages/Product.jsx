import styled from "styled-components"
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import NewLetter from '../components/NewLetter'
import Footer from '../components/Footer'
import { Remove, Add } from "@mui/icons-material"
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';

const Contaienr = styled.div`

`

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
`

const ImgContainer = styled.div`
    flex: 1;
`

const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
`

const InfoContainer = styled.div`
    flex: 1;
    padding: 0 50px;
`

const Title = styled.h1`
    font-family: 'Myriad Pro Light';
    font-weight: 200;
`

const Desc = styled.p`
    margin: 20px 0;   
`

const Price = styled.span`
    font-family: 'Myriad Pro Light';
    font-size: 40px;
    font-weight: 300;
`

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 30px 0;
    width: 50%;
`

const Filter = styled.div`
    display: flex;
    align-items: center;
`

const FilterTitle = styled.h3`
    font-weight: 200;
    font-family: 'Myriad Pro Light';
    font-size: 20px;
`

const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color};
    border: 1px solid #ccc;
    margin: 0 5px;
    cursor: pointer;
    &:not(:last-child) {
        margin-right: 10px;
    }
`

const FilterSize = styled.select`
    margin-left: 10px;
    padding: 10px;
    width: 100px;
`

const FilterSizeOption = styled.option``

const AddContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 30px 0;
    width: 50%;
`

const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`

const Amount = styled.span`
    margin: 0 5px;
    font-size: 20px;
    font-weight: 300;
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid coral;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Button = styled.button`
    padding: 10px 20px;
    background-color: white;
    border: 2px solid coral;
    border-radius: 5px;
    color: coral;
    font-weight: 500;
    font-family: 'Myriad Pro Light';
    font-size: 20px;
    cursor: pointer;
    opacity: 0.7;
    transition: 0.3s;
    display: flex;
    align-items: center;
    text-transform: uppercase;
    &:hover {
        opacity: 1;
        background-color: coral;
        color: white;
    }
`

const Product = () => {
    return (
        <Contaienr>
            <Navbar />
            <Announcement/>
            <Wrapper>
                <ImgContainer>
                    <Image src="https://images.pexels.com/photos/9637931/pexels-photo-9637931.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                </ImgContainer>
                <InfoContainer>
                    <Title>Dresses</Title>
                    <Desc>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus impedit enim aspernatur ab, nam perspiciatis a iusto facere voluptatem. Modi facilis alias omnis tempora, temporibus at sequi laboriosam cumque veritatis.
                        Dicta pariatur vel ipsa unde est labore nam alias. Expedita, beatae nostrum? Eos, amet mollitia esse non nobis adipisci repellat ipsam iusto quis? Non mollitia enim, sed rerum porro aperiam.
                        Explicabo dicta reprehenderit enim nobis velit reiciendis? Fugiat magnam cumque aperiam ipsa dignissimos ab eum veniam ducimus consequuntur numquam hic, sint omnis sapiente sit debitis eos libero pariatur, at quidem!
                    </Desc>
                    <Price>$ 100</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color:</FilterTitle>
                            <FilterColor color="white" />
                            <FilterColor color="black" />
                            <FilterColor color="yellow" />
                        </Filter>
                        <Filter>
                            <FilterTitle>Size:</FilterTitle>
                            <FilterSize>
                                <FilterSizeOption>XS</FilterSizeOption>
                                <FilterSizeOption>S</FilterSizeOption>
                                <FilterSizeOption>M</FilterSizeOption>
                                <FilterSizeOption>L</FilterSizeOption>
                                <FilterSizeOption>XL</FilterSizeOption>
                                <FilterSizeOption>XXL</FilterSizeOption>
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Remove />
                            <Amount>1</Amount>
                            <Add />
                        </AmountContainer>
                        <Button><AddShoppingCartOutlinedIcon /> &nbsp; Add to cart</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <NewLetter />
            <Footer />
        </Contaienr>
    )
}

export default Product
