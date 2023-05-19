import './itemCount.css'
import {useState} from 'react'

const ItemCount = ({stock, initial, onAdd})=>{
    const [count, setCount] = useState(initial)

    const increment = ()=>{
        if(count < stock){
            setCount(count + 1)
        }
    }
    const decrement = ()=>{
        if(count > 1){
            setCount(count - 1)
        }
    }

    return(
        <div className='container' >
            <div className='count'>
                <button className='btnCant' onClick={decrement} >-</button>
                <h4>{count}</h4>
                <button className='btnCant' onClick={increment} >+</button>
            </div>
            <div>
                <button className='btnAgregar' onClick={()=> onAdd(count)} disabled={!stock} >
                    Agregar al carrito
                </button>
            </div>
        </div>
    )
}

export default ItemCount