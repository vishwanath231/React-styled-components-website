import React, { useState, useEffect} from 'react';
import Styled from 'styled-components';
import logo from '../img/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import '../App.css';

const Navbar = () => {


    const [click, setClick] = useState(false);
    const handlerClick = () => setClick(!click);
    const mobileClick = () => setClick(false);


    const Nav = Styled.nav `
        background:#E3EEF8;
        position:fixed;
        width:100%;
        height:60px;
        top:0;
        left:0;
        z-index:99;
        margin:0 auto;
        padding: 15px 20px;
    `; 
    const NavFlex = Styled.div `
        display:flex;
        justify-content: space-between;
        align-items:center;
    `;
    const Logo = Styled.div `
        width: 100px;
    `;
    const Img = Styled.img `
       width: 100px;
    `;
    const Ul = Styled.ul `
       display: flex;
       margin: 0px 10px;

        @media(max-width:768px){
           display: none;
        }
    `;

    const Li = Styled.li `
       margin: 0px 10px;
       list-style: none;
       
    `;

    const Button = Styled.button `
        border:none;
        outline:none;
        padding:10px 14px;
        border-radius:3px;
        font-size:16px;
        font-weight:600;
        cursor:pointer;
        background:#E3EEF8;
        font-family: "karla",sans-serif;
        box-shadow: rgb(180, 210, 238) 0px 1px 2px 0px, rgb(180, 210, 238) 0px 1px 3px 1px;
        transition:0.6s;

        &:hover {
            background-color: #FC593B;
            color:#fff;
        }
        @media(max-width:768px){
            display: none;
        }
    `;
    
    const Bar = Styled.div `
       font-size:18px;
       display: none;
       cursor:pointer;
       color:#000;

        @media(max-width:768px){
            display: block;
        }
    `;

    const Navbar = Styled.div `
        position: absolute;
        top:30%;
        display:none;
        transition:6s;


        @media(max-width:768px){
            display: block;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 100%;
            height: 100vh;
            background-color: #E3EEF8;
        }
    `;

    const NavUl = Styled.ul `
        display: flex;
        justify-content: space-around;
        flex-direction:column;
        height:50vh;
        margin: 100px auto;
        text-align:center;
    `;
    const NavLi = Styled.li `
`;

    const Link = Styled.a `
        cursor:pointer;
        font-size:17px;
        font-weight:600;
        transition:0.6s;

        &:hover {
            color:#FC593B;
        }
    `;



    return (
        <>
            <Nav>
                <NavFlex >
                    <Logo>
                        <Img src={logo} alt="logo"/>
                    </Logo>
                    <Ul>
                        <Li><Link>Landings</Link></Li>
                        <Li><Link>Header</Link></Li>
                        <Li><Link>Blog</Link></Li>
                        <Li><Link>Support</Link></Li>
                    </Ul>
                    <Button>Sign In</Button>
                    <Bar onClick={handlerClick}>
                        {
                         click ? <FontAwesomeIcon icon={faTimes} /> : <FontAwesomeIcon icon={faBars}  />
                        }
                    </Bar>
                </NavFlex>
            </Nav>

           {click ?  
            <Navbar>
                <NavUl>
                    <NavLi><Link onClick={mobileClick}>Landings</Link></NavLi>
                    <NavLi><Link>Pages</Link></NavLi>
                    <NavLi><Link>Blog</Link></NavLi>
                    <NavLi><Link>Support</Link></NavLi>
                </NavUl>
            </Navbar> 
            : 
            <h1>Navbar</h1>
            }
        </>
    )
}

export default Navbar;
