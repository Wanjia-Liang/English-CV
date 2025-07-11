import React, { useState } from 'react';

function OrderForm({ setOrder }) {
    const [name, setName] = useState('');
    const [company, setCompany] = useState('');
    const [details, setDetails] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();
        setOrder({ name, company, details, method: 'form' });
        setSubmitted(true);
    };

    if (submitted) return <div className="alert alert-success">Order submitted! Go to Order Review.</div>;

    return (
        <form onSubmit={handleSubmit} className="mb-3">
            <div className="mb-3">
                <label className="form-label">Name</label>
                <input className="form-control" value={name} onChange={e => setName(e.target.value)} required />
            </div>
            <div className="mb-3">
                <label className="form-label">Company</label>
                <input className="form-control" value={company} onChange={e => setCompany(e.target.value)} required />
            </div>
            <div className="mb-3">
                <label className="form-label">Order Details</label>
                <textarea className="form-control" rows={4} value={details} onChange={e => setDetails(e.target.value)} required />
            </div>
            <button className="btn btn-success" type="submit">Submit Order</button>
        </form>
    );
}

export default OrderForm; 