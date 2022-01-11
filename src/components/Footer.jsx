import styled from "styled-components"
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import PhoneAndroidOutlinedIcon from '@mui/icons-material/PhoneAndroidOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
    background-color: coral;
    color: #fff;
`

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
    justify-content: space-between;
`
const Center = styled.div`
    flex: 1;
    padding: 20px;
`
const Right = styled.div`
    flex: 1;
    padding: 20px;
`

const Title = styled.h3`
    margin-bottom: 30px;
`

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`

const ContactItem = styled.p`
    margin-bottom: 10px;
    display: flex;
    align-items: center;
`

const Logo = styled.h1``

const Desc = styled.p`
    margin: 20px 0;
`
const SocialContainer = styled.div`
    display: flex;
`
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    color: #fff;
    background-color: #${props => props.color};
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    &:not(:last-child) {
        margin-right: 5px;
    }
`

const ContainerBottom = styled.div`
    display: flex;
    padding: 10px;
    justify-content: center;
    align-items: center;
    text-align: center;
`

const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <>
            <Container>
                <Left>
                    <Logo>
                        WebDev.
                    </Logo>
                    <Desc>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis modi suscipit aspernatur esse debitis at sunt accusantium, ullam fugit magni maxime autem eveniet itaque. Quam atque cum sapiente nisi repellendus.
                    </Desc>
                    <SocialContainer>
                        <SocialIcon color="5543b7">
                            <FacebookIcon />
                        </SocialIcon>
                        <SocialIcon color="0398c5">
                            <TwitterIcon />
                        </SocialIcon>
                        <SocialIcon color="e3ff00">
                            <AddLocationIcon />
                        </SocialIcon>
                    </SocialContainer>
                </Left>
                <Center>
                    <Title>
                        Useful Links
                    </Title>
                    <List>
                        <ListItem>Home</ListItem>
                        <ListItem>Cart</ListItem>
                        <ListItem>Man Fashion</ListItem>
                        <ListItem>Woman Fashion</ListItem>
                        <ListItem>Accessories</ListItem>
                        <ListItem>My Account</ListItem>
                        <ListItem>Order Tracking</ListItem>
                        <ListItem>Wish list</ListItem>
                        <ListItem>Terms</ListItem>
                    </List>
                </Center>
                <Right>
                    <Title>
                        Contact Us
                    </Title>
                    <ContactItem>
                        <RoomOutlinedIcon style={{marginRight: '10px'}}/> No 5, 1/1 18M Str, Mo Lao, Ha Dong, Ha Noi, Viet Nam
                    </ContactItem>
                    <ContactItem>
                       <PhoneAndroidOutlinedIcon style={{marginRight: '10px'}}/> (+94) 123 456 789
                    </ContactItem>
                    <ContactItem>
                       <EmailOutlinedIcon style={{marginRight: '10px'}}/> nguyen.van.nam@outlook.com
                    </ContactItem>
                </Right>
            </Container>

            <ContainerBottom>
                <p>© {year} All rights reserved. By <a href="#">Nguyen Van Nam</a></p>
            </ContainerBottom>
        </>
    )
}

export default Footer
