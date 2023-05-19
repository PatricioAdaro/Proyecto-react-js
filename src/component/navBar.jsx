
import CartWidget from "./cartWidget/cartWidget"
const NavBar = ()=>{
    return(
        
        <nav className="nav-bar">
            <div className="logo">
                <h3>
                MODA SHOP
                </h3>
            </div>
            <div className="menu">
                <button className="botones">Camperas</button>
                <button className="botones">Pantalones</button>
                <button className="botones">Remeras</button>
                
            </div>
        
            <CartWidget/>
            
        </nav>
    )
}
export default NavBar 