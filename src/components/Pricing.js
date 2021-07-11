import React from 'react';
import styled from 'styled-components';
import BG from '../img/pricing-bg.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

const Pricing = () => {

    const PriceContainer = styled.div `
        background: url(${BG});
        width: 100%;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        padding: 50px 0;
    `;
    const Content = styled.div `
        margin-bottom: 2.5rem;
        text-align: center;
    `;
    const Titel = styled.div `
        font-size: 17px;
        font-weight: 600;
        text-transform: uppercase;
        color: #fff;
        letter-spacing: 3px;
        margin-bottom:1.5rem;
    `;
    const Head = styled.div `
        font-size: 35px;
        font-weight: 700;
        color: #fff;
        max-width: 500px;
        margin: 0 auto;
    `;
    const Box1 = styled.div `
        background-color: #2B405A;
        padding: 20px;
        border-radius: 3px;
    `;
    const GridContainer = styled.div `
        display: grid;
        grid-template-columns: repeat(2,1fr);
        grid-gap: 3em;
        max-width: 850px;
        margin: 0 auto;
        padding: 0 20px;

        @media(max-width:768px){
            grid-template-columns: 1fr;
        } 
    `;
    const Category = styled.div `
        text-transform: uppercase;
        color: #fff;
        margin-bottom: 2rem;
    `;
    const Price = styled.div `
        font-size: 50px;
        font-weight: 700;
        color: #fff;
        margin-bottom: 1.5rem;
    `;
    const Span = styled.span `
        font-size: 16px;
        font-weight: 500;
    `;
    const Info = styled.div `
        font-size: 14px;
        margin:0 90px 1rem 0 ;
        color: #fff;
        font-weight:300;
    `;
    const Item = styled.div `
        color:#fff;
        padding:10px 0;
        font-size:17px;
        `;
    const ItemStrikeThrough = styled.div `
        color:#747576;
        text-decoration:line-through;
        font-size:17px;
        padding:10px 0;
    `;
    const Button = styled.div `
        width:160px;
        background-color: #258AFF;
        color: #fff;
        padding: 15px 20px;
        border-radius:6px;
        font-size:17px;
        font-weight:600;
        font-family:"karla",sans-serif;
        cursor:pointer;
        margin-top:2rem;
    `;
    const Footer = styled.div `
        margin-top:1rem;
        color:#747576;
    `;
    const Box2 = styled(Box1) `
        background-color: #fff;
    `;
    const Flex = styled.div `
        display: flex;
        justify-content: space-between;
        align-items: center;
    `;
    const Category1 = styled(Category) `
        color:#747576;
    `;
    const Popular = styled.div `
        background-color:#4EAB08;
        padding: 10px 20px;
        border-radius: 30px;
        color: #fff;
        font-size: 15px;
        font-weight: 500;
        text-transform: uppercase;
    `;
    const Price1 = styled(Price) `
        color:#000;
    `;
     const Info1 = styled(Info) `
       color:#747576;
    `;
    const Items = styled.div `
        padding:10px 0;
        font-size:17px;
        font-weight:600;
    `;
    const Buttons = styled(Button) `
        background-color: #FC593B;
    `;

    return (
        <>
           <PriceContainer>
                <Content>
                    <Titel>it's time to taste it</Titel>
                    <Head>Ready to use our service? Choose a package.</Head>
                </Content>
                <GridContainer>
                    <Box1>
                        <Category>basic</Category>
                        <Price>$19<Span>/month</Span></Price>
                        <Info>Good for small business launching their products less then once a year.</Info>
                        <Item><FontAwesomeIcon icon={faCheck} /> Unlimited Blocks</Item>
                        <Item><FontAwesomeIcon icon={faCheck} /> 5GB Clold Storaged</Item>
                        <ItemStrikeThrough><FontAwesomeIcon icon={faTimes} /> Custom Domain Names</ItemStrikeThrough>
                        <ItemStrikeThrough><FontAwesomeIcon icon={faTimes} /> Unlimited Emails</ItemStrikeThrough>
                        <Button>Start Free Trial</Button>
                        <Footer>No credit card-content required</Footer>
                    </Box1>
                    <Box2>
                        <Flex>
                            <Category1>pro</Category1>
                            <Popular>Popular</Popular>
                        </Flex>    
                        <Price1>$29<Span>/month</Span></Price1>
                        <Info1>Good for small business launching their products less then once a year.</Info1>
                        <Items><FontAwesomeIcon icon={faCheck} /> Unlimited Blocks</Items>
                        <Items><FontAwesomeIcon icon={faCheck} /> 10GB Clold Storaged</Items>
                        <Items><FontAwesomeIcon icon={faCheck} /> Unlimited Blocks</Items>
                        <Items><FontAwesomeIcon icon={faCheck} /> Unlimited Blocks</Items>
                        <Buttons>Start Free Trial</Buttons>
                        <Footer>No credit card-content required</Footer>
                    </Box2>
                </GridContainer>
           </PriceContainer>
        </>
    )
}

export default Pricing;
