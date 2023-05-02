
import CartWidget from "./cartWidget/cartWidget"
const NavBar = ()=>{
    return(
        
        <nav className="nav-bar">
            <div className="logo">
                <h3>
                MUSIC SHOP
                </h3>
            </div>
            <div className="menu">
                <button className="botones">Categoria 1</button>
                <button className="botones">Categoria 2</button>
                <button className="botones">Categoria 3</button>
                <button className="botones">Categoria 4</button>
            </div>
        
            <CartWidget/>
            
        </nav>
    )
}
export default NavBar 