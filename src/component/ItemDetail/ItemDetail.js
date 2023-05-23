import "./ItemDetail.css" 
import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({id, titulo, img, categoria, precio, stock, descripcion})=>{
    return(
        <article className="card-ItemDetail">
            <div >
                <img className="card-img"src={img} alt={titulo}/>
            </div>
            <div className="card-detalle">
                <h2 className="card-titulo">{titulo}</h2>
                <p className="card-info">Precio: ${precio}</p>
                <p className="card-info">Stock disponible {stock}</p>
                <p className="card-info">Descripcion: {descripcion}</p>
            </div>
            <div className="card-count">
                <ItemCount initial={1} stock={10} onAdd={(count)=> console.log('cantidad agregada', count)}/>
            </div>
        </article>
    )

}
export default ItemDetail