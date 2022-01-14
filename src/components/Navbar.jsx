import React from "react";
import styled from "styled-components";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import { mobile } from '../Responsive';

const Container = styled.div`
  background-color: #fff;
  height: 60px;
  ${mobile({ padding: "10px 0"})}
`;

const Wrapper = styled.div`
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({ padding: "0"})}
`;

const NavbarLeft = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
`

const NavbarCenter = styled.div`
    flex: 1;
    text-align: center;
`

const NavbarRight = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`

const Languages = styled.span`
    font-size: 12px;
    cursor: pointer;
    ${mobile({ display: "none"})}
`

const SearchContainer = styled.div`
    display: flex;
    align-items: center;
    margin-left: 15px;
    border: .5px solid lightgray;
    padding: 5px;
`

const Input = styled.input`
    border: none;
    outline: none;
    font-size: 16px;
    ${mobile({ width: "50px"})}
`

const Logo = styled.h1`
    font-size: 24px;
    font-family:'Myriad Pro Bold Condensed';
    font-weight:normal;
    text-transform: uppercase;
    ${mobile({ width: "50px"})}
`

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    &:not(:last-child) {
        padding-right: 5px;
    }
`

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <NavbarLeft>
                    <Languages>
                        EN
                    </Languages>
                    <SearchContainer>
                        <Input />
                        <SearchIcon style={{ color: 'gray', fontSize: 16 }}/>
                    </SearchContainer>
                </NavbarLeft>
                <NavbarCenter>
                    <Logo>
                        WebDev Shop
                    </Logo>
                </NavbarCenter>
                <NavbarRight>
                    <MenuItem>REGISTER</MenuItem>
                    <MenuItem>SIGNIN</MenuItem>
                    <MenuItem>
                        <IconButton>
                            <Badge badgeContent={1} color="primary">
                                <ShoppingCartOutlinedIcon color="action" />
                            </Badge>
                        </IconButton>
                    </MenuItem>
                </NavbarRight>
            </Wrapper>
        </Container>
    );
};

export default Navbar;
