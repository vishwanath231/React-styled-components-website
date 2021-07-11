import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab, faFacebookF, faGoogle, faTwitter } from '@fortawesome/free-brands-svg-icons'


const Footer = () => {


    const FooterContainer = styled.div `
        background-color: #E3EEF8;
        padding:100px 0 50px 0;
    `;
    const GridContainer = styled.div `
        display: grid;
        grid-template-columns: repeat(2,1fr);
        grid-gap: 3em;

        @media(max-width:980px){
            grid-template-columns: 1fr;
        }
    `;

    const Box = styled.div `
       width:500px;
       margin:100px auto;
       padding: 0 20px;
        @media(max-width:768px){
           margin:0;
        }
    `;
    const P = styled.div `
       margin-bottom: 1rem;
    `;
   
    const GridBox = styled.div `
        display: grid;
        grid-template-columns: repeat(3,1fr);
        margin: 0px 20px;

        @media(max-width:600px){
            grid-template-columns: 1fr;
        }
    `;
    const LinkBox = styled.div `
        @media(max-width:768px){
            margin-bottom: 2rem;
        }
    `;
    const Ul = styled.ul `
       list-style: none;
    `;
    const Li = styled.li `
        padding: 7px 0;
    `;
    const Link = styled.a `
        text-decoration: none;
        color: #000;
        font-weight:500;
    `;
    const Title = styled.div `
        color:#747576;
        margin-bottom:1.5rem;
        font-weight: 600;
        @media(max-width:768px){
            margin-bottom: .7rem;
        }
    `;

    return (
        <>
            <FooterContainer>
                <GridContainer>
                    <Box>
                        <P>Big, small, online, offline, local. Size doesn't matter. We work on diverse projects for top brands as well as for cool startups.</P>
                        <FontAwesomeIcon icon={faTwitter} />&nbsp;&nbsp;
                        <FontAwesomeIcon icon={faFacebookF} />&nbsp;&nbsp;
                        <FontAwesomeIcon icon={faGoogle} />
                    </Box>
                    <GridBox>
                        <LinkBox>
                            <Ul>
                                <Li><Title>Help menu</Title></Li>
                                <Li><Link href="#">About</Link></Li>
                                <Li><Link href="#">Features</Link></Li>
                                <Li><Link href="#">Works</Link></Li>
                                <Li><Link href="#">Career</Link></Li>
                                <Li><Link href="#">Support</Link></Li>
                            </Ul>
                        </LinkBox>
                        <LinkBox>
                            <Ul>
                                <Li><Title>Support</Title></Li>
                                <Li><Link href="#">Contact</Link></Li>
                                <Li><Link href="#">Help & Support</Link></Li>
                                <Li><Link href="#">Privacy and policy</Link></Li>
                                <Li><Link href="#">terms & conditons</Link></Li>
                            </Ul>
                        </LinkBox>
                        <LinkBox>
                            <Ul>
                                <Li><Title>Products</Title></Li>
                                <Li><Link href="#">Shades Pro</Link></Li>
                                <Li><Link href="#">essentiol Blocks</Link></Li>
                                <Li><Link href="#">Avasta Dash</Link></Li>
                                <Li><Link href="#">vApp Landind Page</Link></Li>
                            </Ul>
                        </LinkBox>
                    </GridBox>
                </GridContainer>
            </FooterContainer>
            
        </>
    )
}

export default Footer;
