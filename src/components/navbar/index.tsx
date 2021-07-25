import { Header, NavStyle, Nav } from './style';

function NavBar() {
    return (
        <NavStyle>
            <Header>
                <div className="header">
                    <h1>Gama OnLine</h1>
                    <p>Super Ofertas para o Dia dos Pais</p>
                </div>
            </Header>
            <Nav>
                <ul className="topnav">
                    <li><a className="active" href="#home">Departamento</a></li>
                    <li><a href="#novidades">Novidades</a></li>
                    <li><a href="#mais">Mais vendidos</a></li>
                    <li className="right"><a href="#ofertas">Ofertas</a></li>
                </ul>
            </Nav>
        </NavStyle>
    )
}

export default NavBar;