import React from 'react'
import './Item.css'
const Item = (props) => {
  return (
    <div className='item'>

      <img height={300} width={250} src={props.image} alt="" />
      <p>{props.name}</p>
      <div className="item_prices">
        <div className="item_price_new">
           ₹ {props.new_price} /=
        </div>
        <div className="item_price_old">
            {props.old_price}
        </div>
      </div>
    </div>
  )
}

export default Item
