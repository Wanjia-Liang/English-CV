import React from 'react';

function Cart({ cart, setCart }) {
    const updateQty = (id, qty) => {
        setCart(cart.map(item => item.id === id ? { ...item, qty: Math.max(1, qty) } : item));
    };
    const removeItem = (id) => {
        setCart(cart.filter(item => item.id !== id));
    };
    const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

    if (cart.length === 0) return <div>Your cart is empty.</div>;

    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Subtotal</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map(item => (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>${item.price}</td>
                            <td>
                                <input type="number" min="1" value={item.qty} onChange={e => updateQty(item.id, parseInt(e.target.value))} style={{ width: 60 }} />
                            </td>
                            <td>${item.price * item.qty}</td>
                            <td>
                                <button className="btn btn-danger btn-sm" onClick={() => removeItem(item.id)}>Remove</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <h5>Total: ${total}</h5>
        </div>
    );
}

export default Cart; 