import styled from "styled-components";
import { categoriesData } from '../data'
import CategoryItem from "./CategoryItem"
import { mobile } from "../Responsive";

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    ${mobile({ flexDirection: "column", padding: "5px", flexWrap: "nowrap" })}
`

const Categories = () => {
    return (
        <Container>
            {categoriesData && categoriesData.map((category, index) => ( <CategoryItem key={index} item={category} /> ))}
        </Container>
    )
}

export default Categories
