const Item = ({id, titulo, img, precio, stock}) =>{
    return(
        <article>
            <div>
                <img src={img} alt={titulo}/>
            </div>
            <div>
                <h2>{titulo}</h2>
                <p>Precio: ${precio}</p>
                <p>Stock disponible {stock}</p>
            </div>
            <div>
                <button>Ver detalle</button>
            </div>
        </article>
    )
}
export default Item 