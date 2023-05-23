import "./item.css"
import { Link } from "react-router-dom"
const Item = ({id, titulo, img, precio, stock}) =>{
    return(
        <article className="item-cont">
            <div >
                <img className="item-img"src={img} alt={titulo}/>
            </div>
            <div className="item-detalle">
                <h2 className="titulo">{titulo}</h2>
                <p className="precio">Precio: ${precio}</p>
                <p className="stock">Stock disponible {stock}</p>
            </div>
            <div>
                <Link to="/component/ItemDetailContainer/ItemDetailContainer">
                    <button className="btn-detalle">Ver detalle</button>
                </Link>
                
            </div>
        </article>
    )
}
export default Item 