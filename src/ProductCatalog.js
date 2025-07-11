import React from 'react';

const PRODUCTS = [
    { id: 1, name: 'Bulk Rice (50kg)', price: 40 },
    { id: 2, name: 'Cooking Oil (20L)', price: 30 },
    { id: 3, name: 'Flour (25kg)', price: 20 },
    { id: 4, name: 'Sugar (10kg)', price: 12 },
];

function ProductCatalog({ cart, setCart }) {
    const addToCart = (product) => {
        const existing = cart.find(item => item.id === product.id);
        if (existing) {
            setCart(cart.map(item => item.id === product.id ? { ...item, qty: item.qty + 1 } : item));
        } else {
            setCart([...cart, { ...product, qty: 1 }]);
        }
    };

    return (
        <div className="row">
            {PRODUCTS.map(product => (
                <div className="col-md-3 mb-4" key={product.id}>
                    <div className="card h-100">
                        <div className="card-body">
                            <h5 className="card-title">{product.name}</h5>
                            <p className="card-text">${product.price} per unit</p>
                            <button className="btn btn-primary" onClick={() => addToCart(product)}>
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ProductCatalog; 