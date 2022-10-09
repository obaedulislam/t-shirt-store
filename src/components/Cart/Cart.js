import React from 'react';
import './Cart.css'

const Cart = ({cart, handleRemoveItem}) => {
    let message;
    if(cart.length === 0){
        message = <p>Please Buy At Lease One Item</p>
    }
    else if(cart.length === 1){
        message = <div>
            <p>Amar jonno ekta nao</p>
            <p>Tomar nijer jonno ekta</p>
            <p><small>Amar jonno r ekta</small></p>
        </div>
    }
    else{
        message = <p>Thanks, For Buying</p>
    }


    return (
        <div>
            <h1 className={cart.length === 2 ? `yellow`: `green`}>This is Order Summary</h1>
            <h3 className={`bold ${cart.length === 2? 'red':'blue'}`}>Order Quantity: {cart.length}</h3>
            {
                cart.map(tshirt => 
                    <p key = {tshirt._id}>
                        {tshirt.name}
                        <button onClick={() => handleRemoveItem(tshirt)}>X</button>
                    </p>
                )
            }
            {
                message
            }
            {
                cart.length === 3 ? <p>Tin jonke Gift diba?</p> : <p>Kino Kino</p>
            }
            {
                cart.length === 2 && <h2>Double Item</h2>
            }
            {
                cart.length === 4 || <h2>4 Item Hoini</h2>
            }
        </div>
    );
};

export default Cart;