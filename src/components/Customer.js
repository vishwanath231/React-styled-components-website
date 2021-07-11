import React from 'react';
import styled from 'styled-components';
import IMG from '../img/user.png';

const Customer = () => {


    const Container = styled.div `
        background-color: #E3EEF8;
        padding: 60px 0;
    `;
    const FlexContainer = styled.div `
       display: flex;
       justify-content: space-between;
       align-items: center;
       max-width: 1200px;
       margin: 0 auto;
       padding: 0 20px;

       @media(max-width:768px){
           flex-direction: column;
       }
    `;
    const Content = styled.div `
        margin: 1rem 2rem 0 0;
    `;
    const Titel = styled.div `
        font-size: 16px;
        font-weight: 600;
        letter-spacing: 3px;
        text-transform: uppercase;
        color: #318AFF;
    `;
    const Head = styled.div `
        color: #1F1F1F;
        font-size: 35px;
        font-weight: 750;
        margin: 2.5rem 0 1.5rem 0;
    `;
    const Para = styled.div `
        font-size: 16px;
        font-weight: 500;
    `;
    const GridContainer = styled.div `
        display: grid;
        grid-template-columns: repeat(2,1fr);
        grid-gap: 2em;

        @media(max-width:768px){
            grid-template-columns: 1fr;
        }
    `;
    const Box = styled.div `
        background-color: #fff;
        padding: 20px;
        border-radius: 4px;
    `;
    const Info = styled.div `
        font-family: "Rubik",sans-serif;
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
    `;
    const User = styled.div `
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 210px;
        margin: 1.5rem 0;
    `;
    const Img = styled.img `
        margin-right: 10px;
    `;
    const Dev = styled.div ``;
    const Name = styled.div `
        font-size: 17px;
        font-weight: 600;
        padding: 2px 0;
    `;
    const Work = styled.div `
        font-size: 16px;
        font-weight: 500;
        padding: 2px 0;
    `;

    return (
        <>
            <Container>
                <FlexContainer>
                    <Content>
                        <Titel>Customer's story</Titel>
                        <Head>50k+ users are showing love.</Head>
                        <Para>We designed and tested prototypes that heped identify pain points in the account creation process . together, we shaped the new standard.</Para>
                    </Content>
                    <GridContainer>
                        <Box>
                            <Info>
                                "You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save.
                            </Info>
                            <User>
                                <Img src={IMG} alt="Dev" />
                                <Dev>
                                    <Name>Cameron Anderson</Name>
                                    <Work>Designer</Work>
                                </Dev>
                            </User>
                        </Box>
                        <Box>
                            <Info>
                                "You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save.
                            </Info>
                            <User>
                                <Img src={IMG} alt="Dev" />
                                <Dev>
                                    <Name>Cameron Anderson</Name>
                                    <Work>Designer</Work>
                                </Dev>
                            </User>
                        </Box>
                        <Box>
                            <Info>
                                "You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save.
                            </Info>
                            <User>
                                <Img src={IMG} alt="Dev" />
                                <Dev>
                                    <Name>Cameron Anderson</Name>
                                    <Work>Designer</Work>
                                </Dev>
                            </User>
                        </Box>
                        <Box>
                            <Info>
                                "You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save.
                            </Info>
                            <User>
                                <Img src={IMG} alt="Dev" />
                                <Dev>
                                    <Name>Cameron Anderson</Name>
                                    <Work>Designer</Work>
                                </Dev>
                            </User>
                        </Box>
                    </GridContainer>
                </FlexContainer>
            </Container>
        </>
    )
}

export default Customer;
