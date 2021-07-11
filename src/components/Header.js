import React from 'react';
import styled from 'styled-components';
import IMG1 from '../img/pencil.png';
import IMG2 from '../img/layers.png';
import IMG3 from '../img/responsive.png';


const HeaderSection = styled.div `
    background-color: #E3EEF8;
    width: 100%;
    margin-top:calc(60px - 40px);
    padding: 30px 10px;
`;

const HeaderContent = styled.div `
    text-align:center;
    max-width: 600px;
    margin: 100px auto 0 auto;
`;

const P = styled.p `
    font-size: 16px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: #666;
`;
const H1 = styled.h1 `
    font-size: 60px;
    font-weight: 700;
    color: #1F1F1F;
    margin: 30px 0 20px 0;

    @media(max-width:768px){
        font-size: 30px;
        font-weight: 800;
    }
`;
const P2 = styled.p`
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 0.4px;
    color: #999;
    line-height: 30px;

    @media(max-width:768px){
        font-size: 18px;
        font-weight: 500;
        margin: 30px;
    }
`;

const Form = styled.form `
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
`;

const Input = styled.input `
   outline:none;
   border: none;
   background-color: #fff;
   border-radius: 3px;
   font-size: 16px;
   font-weight: 500;
   width: 260px;
   margin-right: 10px;
   padding: 20px 10px;
   font-family: "karla",sans-serif;
`;

const Button = styled.button `
   outline:none;
   border: none;
   background-color: #FC593B;
   border-radius: 3px;
   font-size: 17px;
   font-weight: 700;
   color: #fff;
   padding:20px;
   font-family: "karla",sans-serif;
   cursor: pointer;
`;
const P3 = styled(P2) `
   font-size:17px;
   text-align:center;
   margin-top:10px;
`;

const FlexContainer = styled.div `
    display: flex;
    justify-content:space-around;
    align-items:center;
    max-width:1200px;
    margin:100px auto 0 auto;

    @media(max-width:768px){
        flex-direction:column;
    }
`;
const Box = styled.div `
    display:flex;
    justify-content: space-between;
    align-items:center;
    margin: 0 20px;
    padding:40px 0;
    border-radius:3px;
    background:#E3EEF8;
    box-shadow: rgb(180, 210, 238) 0px 1px 2px 0px, rgb(180, 210, 238) 0px 1px 3px 1px;
    
    @media(max-width:768px){
        margin: 20px 0;
    }
`;

const ImgBx = styled.div ` 
   width:50px;
   padding:0 20px;
`;
const Content = styled.div ` 
   padding: 0 40px;
`;
const H2 = styled.h2 ` 
   font-size:20px;
   font-weight:600;
   color:#000;
   padding-bottom:1rem;
`;
const P4 = styled.p ` 
    font-size:16px;
   font-weight:500;
   color:#666;
`;


const Header = () => {
    return (
        <>
            <HeaderSection>
                <HeaderContent>
                    <P>present your service</P>
                    <H1>Make landing page fast and easily</H1>
                    <P2>create custom landing pages with shades that convert nore visitors than any website--no coding required.</P2>
                </HeaderContent>
                <Form>
                    <Input type="text" placeholder="example@support.com" />
                    <Button>Get Started</Button>
                </Form>
                <P3>Trused by over 50,000+ customers</P3>
                <FlexContainer>
                    <Box>
                        <ImgBx>
                            <img src={IMG1} alt="Pencil" />
                        </ImgBx> 
                        <Content>
                            <H2>Easy to use</H2>
                            <P4>Editing and customizing Essential Landing is easy and fast.</P4>
                        </Content>
                    </Box>
                    <Box>
                        <ImgBx>
                            <img src={IMG2} alt="Layer" />
                        </ImgBx> 
                        <Content>
                            <H2>300+ Blocks</H2>
                            <P4>Editing and customizing Essential Landing is easy and fast.</P4>
                        </Content>
                    </Box>
                    <Box>
                        <ImgBx>
                            <img src={IMG3} alt="Responsive" />
                        </ImgBx> 
                        <Content>
                            <H2>100% Responsive</H2>
                            <P4>Editing and customizing Essential Landing is easy and fast.</P4>
                        </Content>
                    </Box>
                </FlexContainer>
            </HeaderSection>
        </>
    )
}

export default Header;
