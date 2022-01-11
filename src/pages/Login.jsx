import styled from "styled-components"

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: url("https://images.pexels.com/photos/9404648/pexels-photo-9404648.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260") bottom center no-repeat; 
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Wrapper = styled.div`
    width: 25%;
    padding: 20px;
    background-color: white;
`

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
    margin: 10px 0;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
`

const Input = styled.input`
    flex: 1;
    margin: 10px 0;
    padding: 10px;
`

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: coral;
    color: white;
    cursor: pointer;
    margin-bottom: 10px;
`

const Link = styled.a`
    margin: 5px 0;
    font-size: 12px;
    color: coral;
    text-decoration: underline;
`

const Login = () => {
    return (
        <Container>
            <Wrapper>
                <Title>SIGN IN</Title>
                <Form>
                    <Input placeholder="Email/User Name" style={{marginBottom: 0}} />
                    <Input placeholder="Password" type="password" />
                    <Button>LOGIN</Button>
                    <Link href="/forget-password">Forgot Password?</Link>
                    <Link href="/register">Create an Account</Link>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Login
