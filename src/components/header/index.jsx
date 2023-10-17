import { Link } from "react-router-dom";
import { HeaderContainer, Links } from './style'
import { Dropdown } from "react-bootstrap";
import {BsSearch} from "react-icons/bs"

function Header() {

    return (
        <HeaderContainer>
            <Link to={'/'} className="text-decoration-none text-white">
                <p className="ms-4" style={{fontFamily:'Kavoon', fontSize:'3rem'}}>MovieList</p>
            </Link>
            <Links>
                <Link to={'/buscar'}>
                    <BsSearch size={15}/>
                </Link>
                <Link to='/'>
                    <span>Início</span>
                </Link>

                <Dropdown className="d-inline" autoClose="outside">
                    <Dropdown.Toggle className="btn-sm btn-dark">
                        Gêneros
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="dropdown-menu-dark">
                        <Dropdown.Item href="/genero/28">
                            Ação
                        </Dropdown.Item>
                        <Dropdown.Item href="/genero/12">
                            Aventura
                        </Dropdown.Item>
                        <Dropdown.Item href="/genero/35">
                            Comédia
                        </Dropdown.Item>
                        <Dropdown.Item href="/genero/18">
                            Drama
                        </Dropdown.Item>
                        <Dropdown.Item href="/genero/878">
                            Ficção Científica
                        </Dropdown.Item>
                        <Dropdown.Item href="/genero/27">
                            Terror
                        </Dropdown.Item>
                        <Dropdown.Item href="/genero/10749">
                            Romance
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Links>
        </HeaderContainer>
    );
}

export default Header;


                            
                           
                            
                            
                            
                            