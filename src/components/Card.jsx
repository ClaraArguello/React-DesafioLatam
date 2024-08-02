import React from 'react'
import Footer from './Footer'

const Card = ({name, price, ingredients, img}) => {
    let ingr = ingredients.join(' + ')

    let token = false
    let total = 2342934

  return (
    <div>
        <img src={img} alt={name} />
        <h5>Pizza {name}</h5>
        <p>Ingredientes: {ingr}</p>
        <p>Precio: ${price}</p>
        {/* {token? 
            <div>
                <button>Logout</button>
                <button>Profile</button>
            </div>:
            <div>
                <button>Login</button>
                <button>Register</button>
            </div>}
            <p>Total: {total}</p>
        <Footer /> */}
    </div>
  )
}

export default Card