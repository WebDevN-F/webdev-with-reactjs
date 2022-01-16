import { Outlet } from "react-router-dom";
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import NewLetter from '../components/NewLetter'
import Footer from '../components/Footer'
import styled from 'styled-components';

const Container = styled.div``

const Layout = () => {
    return (
        <Container>
            <Announcement />
            <Navbar />
            <Outlet />
            <NewLetter />
            <Footer />
        </Container>
    );
}


export default Layout;