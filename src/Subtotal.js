import React from 'react'
import CurrencyFormat from 'react-currency-format'
import { getBasketTotal } from './reducer'
import './Subtotal.css'
function Subtotal({basket}) {

  return (
    <div className='subtotal'>
        <CurrencyFormat 
        renderText={(Value)=>(
            <>
            <p>
                Subtotal ( {basket?.length} items):<strong>{Value}</strong>
            </p>
            <small className="subtotal__gift">
                <input type="checkbox"/>This Order contains a gift
            </small>

            </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}/>

        <button>Proceed to checkout</button>
    </div>
  )
}

export default Subtotal