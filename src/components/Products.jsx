import styled from "styled-components";
import { popularProducts } from '../data';
import Product from "./Product";
import { mobile } from '../Responsive'

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 20px;
    justify-content: space-between;
    ${mobile({ padding: "5px" })}
`

const Products = () => {
    return (
        <Container>
            { popularProducts && popularProducts.map((product, index) => ( <Product key={index} item={product} /> )) }
        </Container>
    )
}

export default Products
