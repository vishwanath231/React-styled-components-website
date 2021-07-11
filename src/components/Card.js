import React from 'react';
import styled from 'styled-components';
import IMG4 from '../img/img-1.png';
import IMG5 from '../img/img-2.png';
import IMG6 from '../img/pencil-white.png';
import IMG7 from '../img/window.png';


const Card = () => {


    const SectionOne = styled.div ` 
        background-color:#258AFF;
        padding: 100px 20px;
    `;
    const OneFlexContainer = styled.div ` 
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        max-width:1200px;
        margin: 0 auto;

        @media(max-width:768px){
            grid-template-columns: 1fr;
        }
    `;
    const ImgBox = styled.div ` 
        text-align: center;
        width: 450px;

        @media(max-width:768px){
            width: 450px;
        }
    `;
    const Img = styled.img ` 
        width: 100%;
    `;
    const Content = styled.div `
        text-align: left;
        color: #fff;
        margin-top: 110px;
        @media(max-width:768px){
            text-align: center;
            margin-top: 50px;
        }
    `;
    const P = styled.p ` 
        font-size: 17px;
        font-weight: 700;
        letter-spacing: 2px;
    `;
    const H1 = styled.h1 ` 
        font-size: 50px;
        font-weight: 700;
        margin: 40px 0 20px 0;

        @media(max-width:768px){
            font-size: 38px;
            font-weight: 700;
            margin: 20px 0;
        }
    `;
    const P1 = styled.p ` 
        font-size: 18px;
        font-weight: 500;
        color: #D9DFE5;
        @media(max-width:768px){
            margin: 0px 10px;
        }
    `;
    const Button = styled.button ` 
        border:none;
        outline:none;
        padding:20px 60px;
        border-radius:3px;
        font-size:16px;
        font-weight:600;
        cursor:pointer;
        background:#fff;
        margin-top: 2rem;
        font-family: "karla",sans-serif;
        cursor: pointer;
    `;


    const SectionTwo = styled.div ` 
        background-color:#E3EEF8;
        padding: 100px 20px;
    `;

    const ImgBoxTwo = styled.div ` 
        width: 450px;
        text-align:center;

        @media(max-width:768px){
            grid-row: 3/1;
            width: 450px;
        }
    `;
    const Container = styled.div `
        margin-top:130px;
        @media(max-width:768px){
            margin-top:0px;
        }
    `;
    const ContentTwo = styled.div `
        @media(max-width:768px){
            text-align:center;
            margin-top:50px;
        }
    `;
    const Para = styled(P) `
       color:#489DFE;
    `;
    const Head = styled(H1) `
       color:#1F1F1F;
    `;
    const Para1 = styled(P1) `
       color:#747576;
    `;

    const CardBox = styled.div `
        display: flex;
        justify-content: space-between;
        margin-top:50px;

        @media(max-width:768px){
            flex-direction:column;
            margin-top:50px;
        }
    `;
    const Box = styled.div `
        margin:1rem 0;
    `;
    const Image = styled.img `
        background-color: #258AFF;
        border-radius:50%;
        padding:20px;
        margin:.5rem 0;
    `;
    const Head1 = styled.h1 `
       font-size:22px;
       font-weight:600;
       color:#000;
       margin:.6rem 0 1rem 0;

        @media(max-width:768px){
            font-size:20px;
            font-weight:700;
        }
    `;
    const Para2 = styled.p `
       font-size:17px;
       font-weight:400;
        color:#747576;
    `;


    return (
        <>
            <SectionOne>
                <OneFlexContainer>
                    <ImgBox>
                        <Img src={IMG4} alt="" />
                    </ImgBox>
                    <Content>
                        <P>DESIGN IS EVERYTHING</P>
                        <H1>Present your app features like this way.</H1>
                        <P1>We designed and tested prototypes that helped identify pain points in the account creation process. Together, we shaped the new standard.</P1>
                        <Button>Get Started</Button>
                    </Content>
                </OneFlexContainer>
            </SectionOne>

            <SectionTwo>
                <OneFlexContainer>
                    <Container>
                        <ContentTwo>
                            <Para>DESIGN IS EVERYTHING</Para>
                            <Head>Present your app features like this way.</Head>
                            <Para1>We designed and tested prototypes that helped identify pain points in the account creation process. Together, we shaped the new standard.</Para1>
                        </ContentTwo>
                        <CardBox>
                            <Box>
                                <Image src={IMG6} />
                                <Head1>Easy to use</Head1>
                                <Para2>Event is not like most tech conferences. We want our design to engage.</Para2>
                            </Box>
                            <Box>
                                <Image src={IMG7} />
                                <Head1>Beautiful divs</Head1>
                                <Para2>Event is not like most tech conferences. We want our design to engage.</Para2>
                            </Box>
                        </CardBox>
                    </Container>
                    <ImgBoxTwo>
                        <Img src={IMG5} alt="" />
                    </ImgBoxTwo>
                </OneFlexContainer>
            </SectionTwo>
        </>
    )
}

export default Card;
