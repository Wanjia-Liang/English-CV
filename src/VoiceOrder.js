import React, { useState } from 'react';

function VoiceOrder({ setOrder }) {
    const [transcript, setTranscript] = useState('');
    const [listening, setListening] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    let recognition;

    if ('webkitSpeechRecognition' in window) {
        recognition = new window.webkitSpeechRecognition();
        recognition.continuous = false;
        recognition.interimResults = false;
        recognition.lang = 'en-US';
        recognition.onresult = (event) => {
            setTranscript(event.results[0][0].transcript);
            setListening(false);
        };
        recognition.onerror = () => setListening(false);
        recognition.onend = () => setListening(false);
    }

    const startListening = () => {
        if (recognition) {
            setListening(true);
            recognition.start();
        }
    };

    const handleSubmit = e => {
        e.preventDefault();
        setOrder({ details: transcript, method: 'voice' });
        setSubmitted(true);
    };

    if (!('webkitSpeechRecognition' in window)) {
        return (
            <div className="alert alert-warning">
                <h5>Voice input not supported</h5>
                <p>Your browser doesn't support voice recognition. Please use Chrome, Edge, or Safari for voice input functionality.</p>
            </div>
        );
    }

    if (submitted) return <div className="alert alert-success">Voice order submitted! Go to Order Review.</div>;

    return (
        <form onSubmit={handleSubmit} className="mb-3">
            <div className="mb-3">
                <label className="form-label">Speak your order</label>
                <div className="input-group">
                    <textarea className="form-control" rows={3} value={transcript} readOnly />
                    <button type="button" className="btn btn-primary" onClick={startListening} disabled={listening}>
                        {listening ? 'Listening...' : 'Start Voice Input'}
                    </button>
                </div>
            </div>
            <button className="btn btn-success" type="submit" disabled={!transcript}>Submit Voice Order</button>
        </form>
    );
}

export default VoiceOrder; 