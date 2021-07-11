import React from 'react';
import styled from 'styled-components';
import IMG1 from '../img/brand-logo.svg'
import IMG2 from '../img/brand-logo-1.svg'
import IMG3 from '../img/brand-logo-2.svg'
import IMG4 from '../img/brand-logo-3.svg'
import IMG5 from '../img/brand-logo-4.svg'


const Brand = () => {


    const Container = styled.div `
        background-color:#E3EEF8;
        padding: 50px 0;
    `;
    const FlexContainer = styled.div `
        display: flex;
        justify-content: center;
        align-items: center;
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 20px;
        flex-wrap: wrap;
        text-align: center;
    `;
    const Logo = styled.img `
       width: 180px;
       margin: 15px;
    `;
    const Logo1 = styled.img `
       width: 140px;
       margin: 15px;
    `;

    return (
        <>
            <Container>
                <FlexContainer>
                    <Logo src={IMG1} alt="Logo" />
                    <Logo src={IMG2} alt="Logo" />
                    <Logo src={IMG3} alt="Logo" />
                    <Logo1 src={IMG4} alt="Logo" />
                    <Logo src={IMG5} alt="Logo" />
                </FlexContainer>
            </Container>
        </>
    )
}

export default Brand;
