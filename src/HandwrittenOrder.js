import React, { useState } from 'react';
import Tesseract from 'tesseract.js';

function HandwrittenOrder({ setOrder }) {
    const [image, setImage] = useState(null);
    const [ocrText, setOcrText] = useState('');
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleImageChange = e => {
        if (e.target.files && e.target.files[0]) {
            setImage(e.target.files[0]);
            setOcrText('');
        }
    };

    const handleOcr = () => {
        if (!image) return;
        setLoading(true);
        Tesseract.recognize(image, 'eng')
            .then(({ data: { text } }) => {
                setOcrText(text);
                setLoading(false);
            })
            .catch(error => {
                console.error('OCR Error:', error);
                setOcrText('Error processing image. Please try again with a clearer image.');
                setLoading(false);
            });
    };

    const handleSubmit = e => {
        e.preventDefault();
        setOrder({ details: ocrText, method: 'handwritten' });
        setSubmitted(true);
    };

    if (submitted) return <div className="alert alert-success">Handwritten order submitted! Go to Order Review.</div>;

    return (
        <form onSubmit={handleSubmit} className="mb-3">
            <div className="mb-3">
                <label className="form-label">Upload Handwritten Order Image</label>
                <input className="form-control" type="file" accept="image/*" onChange={handleImageChange} />
            </div>
            <button type="button" className="btn btn-secondary mb-3" onClick={handleOcr} disabled={!image || loading}>
                {loading ? 'Processing...' : 'Extract Text'}
            </button>
            <div className="mb-3">
                <label className="form-label">Extracted Text</label>
                <textarea className="form-control" rows={4} value={ocrText} readOnly />
            </div>
            <button className="btn btn-success" type="submit" disabled={!ocrText}>Submit Handwritten Order</button>
        </form>
    );
}

export default HandwrittenOrder; 