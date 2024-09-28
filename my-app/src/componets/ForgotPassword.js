import React, { useState } from 'react';
import axios from 'axios';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/auth/forgot-password', { email });
            alert('Password reset email sent');
        } catch (error) {
            alert('Error sending password reset email');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h1 className="text-2xl font-bold text-center text-blue-800 mb-5">Forgot Password</h1>
                <input 
                    type="email" 
                    placeholder="Your email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-2 mb-4 border border-gray-300 rounded-lg" 
                />
                <button onClick={handleSubmit} className="w-full bg-blue-500 text-white py-2 rounded-lg mb-4">Send Reset Link</button>
            </div>
        </div>
    );
};

export default ForgotPassword;
