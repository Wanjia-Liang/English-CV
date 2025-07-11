import React, { useState } from 'react';
import ProductCatalog from './ProductCatalog';
import Cart from './Cart';
import OrderForm from './OrderForm';
import VoiceOrder from './VoiceOrder';
import HandwrittenOrder from './HandwrittenOrder';
import OrderReview from './OrderReview';
import './App.css';

const NAVS = [
    { key: 'catalog', label: 'Product Catalog' },
    { key: 'cart', label: 'Cart' },
    { key: 'form', label: 'Online Form' },
    { key: 'voice', label: 'Voice Order' },
    { key: 'handwritten', label: 'Handwritten Order' },
    { key: 'review', label: 'Order Review' },
];

function App() {
    const [page, setPage] = useState('catalog');
    const [cart, setCart] = useState([]);
    const [order, setOrder] = useState(null);

    return (
        <div className="container py-4">
            <h1 className="mb-4">Wholesale Ordering App</h1>
            <nav className="mb-4">
                {NAVS.map(nav => (
                    <button
                        key={nav.key}
                        className={`btn btn-outline-primary me-2 mb-2${page === nav.key ? ' active' : ''}`}
                        onClick={() => setPage(nav.key)}
                    >
                        {nav.label}
                    </button>
                ))}
            </nav>
            <div>
                {page === 'catalog' && <ProductCatalog cart={cart} setCart={setCart} />}
                {page === 'cart' && <Cart cart={cart} setCart={setCart} />}
                {page === 'form' && <OrderForm setOrder={setOrder} />}
                {page === 'voice' && <VoiceOrder setOrder={setOrder} />}
                {page === 'handwritten' && <HandwrittenOrder setOrder={setOrder} />}
                {page === 'review' && <OrderReview cart={cart} order={order} />}
            </div>
        </div>
    );
}

export default App; 