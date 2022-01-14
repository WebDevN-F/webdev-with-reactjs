import styled from "styled-components"
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import NewLetter from '../components/NewLetter'
import Footer from '../components/Footer'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const Container = styled.div`
   
`

const Wrapper = styled.div``

const Title = styled.h1`
    font-family: 'Myriad Pro Light';
    font-weight: 200;
    font-size: 40px;
    margin: 20px;
    text-align: center;
`

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`

const TopBottom = styled.div`
    padding: 10px;
    border: ${props => props.type === "filled" ? "1px solid coral" : "1px solid #000"};
    background-color: ${props => props.type === "filled" ? "coral" : "transparent"}; 
    color: ${props => props.type === "filled" ? "#fff" : "#000"}; 
    border-radius: 5px;
    margin: 10px;
    font-family: 'Myriad Pro Light';
    font-weight: 200;
    font-size: 20px;
    cursor: pointer;
`

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px;
`

const Info = styled.div`
    flex: 3;
`
const TopTexts = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0 10px;
`

const Product = styled.div`
    display: flex;
    justify-content: space-between;
`

const ProductDetail = styled.div`
    flex: 2;
    display: flex;
`

const Image = styled.img`
    width: 100px;
`

const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    font-size: 20px;
`

const ProductName = styled.span``

const ProductId = styled.span``

const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color};
`

const ProductSize = styled.span``

const PriceDetail = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`

const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`
const ProductAmount = styled.span`
    font-size: 24px;
    margin: 5px;
 `

const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: normal;
    font-family: 'Myriad Pro Light';
`

const Hr = styled.hr`
    margin: 5px 0;
    background-color: #ccc;
    border: none;
    height: 1px;
`

const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-left: 10px;
`

const SummaryTitle = styled.h1`
    font-family: 'Myriad Pro Light';
    font-weight: 600;
    font-size: 30px;
`

const SummaryItem = styled.div`
    margin: 30px 0;
    display: flex;
    justify-content: space-between;
    font-weight: ${props => props.type === 'total' ? "600" : "normal"};
    font-size: ${props => props.type === 'total' ? "30px" : "normal"};
`

const SummaryItemText = styled.span``

const SummaryItemPrice = styled.span``

const Button = styled.button`
    width: 100%;
    height: 50px;
    background-color: coral;
    color: #fff;
    font-size: 20px;
    font-family: 'Myriad Pro Light';
    font-weight: 600;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`

const Cart = () => {
    document.title = "Cart";
    return (
        <Container>
            <Navbar />
            <Announcement/>
            <Wrapper>
                <Title>Your Bag</Title>
                <Top>
                    <TopBottom>CONTINUE SHOPPING</TopBottom>
                    <TopTexts>
                        <TopText>
                            Shopping Bag (2)
                        </TopText>
                        <TopText>
                            Your Wishlist (0)
                        </TopText>
                    </TopTexts>
                    <TopBottom type="filled">CHECKOUT NOW</TopBottom>
                </Top>

                <Bottom>
                    <Info>
                        <Product>
                            <ProductDetail>
                                <Image src="https://images.pexels.com/photos/7747948/pexels-photo-7747948.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                                <Details>
                                    <ProductName>
                                        <b>Product:</b>  TEST PRODUCT NAME
                                    </ProductName>
                                    <ProductId>
                                        <b>ID:</b> 123412321421
                                    </ProductId>
                                    <ProductColor color="yellow" />
                                    <ProductSize><b>36.5</b></ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <AddIcon />
                                    <ProductAmount>2</ProductAmount>
                                    <RemoveIcon />
                                </ProductAmountContainer>
                                <ProductPrice>$ 30</ProductPrice>
                            </PriceDetail>
                        </Product>
                        <Hr />
                        <Product>
                            <ProductDetail>
                                <Image src="https://images.pexels.com/photos/10200429/pexels-photo-10200429.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                                <Details>
                                    <ProductName>
                                        <b>Product:</b>  TEST PRODUCT NAME 2
                                    </ProductName>
                                    <ProductId>
                                        <b>ID:</b> 123412321421 
                                    </ProductId>
                                    <ProductColor color="gray" />
                                    <ProductSize><b>36.5</b></ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <AddIcon />
                                    <ProductAmount>1</ProductAmount>
                                    <RemoveIcon />
                                </ProductAmountContainer>
                                <ProductPrice>$ 33</ProductPrice>
                            </PriceDetail>
                        </Product>
                    </Info>
                    <Summary>
                        <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice>$ 60</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Estimated Shipping</SummaryItemText>
                            <SummaryItemPrice>$ 5</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Shipping Discount</SummaryItemText>
                            <SummaryItemPrice>$ -5</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type="total">
                            <SummaryItemText>Total</SummaryItemText>
                            <SummaryItemPrice>$ 60</SummaryItemPrice>
                        </SummaryItem>
                        <Button>CHECKOUT NOW</Button>
                    </Summary>
                </Bottom>
            </Wrapper>
            <NewLetter />
            <Footer />            
        </Container>
    )
}

export default Cart
