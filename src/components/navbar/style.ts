import styled from 'styled-components';

export const Header = styled.div`
    .header {
    padding: 30px;
    text-align: center;
    background: white;
    }

    .header h1 {
    font-size: 50px;
    }
`

export const NavStyle = styled.div`
    background-color: #001D98;
    width: 80%;
    margin: 20px auto;
`

export const Nav = styled.div`
  
    ul.topnav {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    }

    ul.topnav li {float: left;}

    ul.topnav li a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    }

    ul.topnav li a:hover:not(.active) {background-color: #111;}

    ul.topnav li a.active {background-color: #04AA6D;}

    ul.topnav li.right {float: right;}

    @media screen and (max-width: 600px) {
    ul.topnav li.right, 
    ul.topnav li {float: none;}
    }
`