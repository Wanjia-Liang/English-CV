import React from 'react';

function OrderReview({ cart, order }) {
    return (
        <div>
            <h4>Cart Review</h4>
            {cart && cart.length > 0 ? (
                <ul className="list-group mb-3">
                    {cart.map(item => (
                        <li className="list-group-item d-flex justify-content-between align-items-center" key={item.id}>
                            {item.name} x {item.qty}
                            <span>${item.price * item.qty}</span>
                        </li>
                    ))}
                </ul>
            ) : <div>No items in cart.</div>}
            <h4>Order Details</h4>
            {order ? (
                <div className="card">
                    <div className="card-body">
                        <p><strong>Order Method:</strong> {order.method}</p>
                        {order.name && <p><strong>Name:</strong> {order.name}</p>}
                        {order.company && <p><strong>Company:</strong> {order.company}</p>}
                        <p><strong>Details:</strong></p>
                        <pre>{order.details}</pre>
                    </div>
                </div>
            ) : <div>No order submitted yet.</div>}
        </div>
    );
}

export default OrderReview; 