import "./header.css"
import { Link } from "react-router-dom";
function Header() {
    return(
        <header> 
            <h1>StayFinder</h1>
            
            <nav>
                <Link to="/">Explorar</Link>
                <Link to="/login">Entrar</Link> 
                <Link to=" ">Favoritos</Link>
                </nav>
            
        </header>
    );

}
export default Header;