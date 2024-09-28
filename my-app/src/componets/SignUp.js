import React, { useState } from 'react';

const SignUp = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = async (e) => {
        e.preventDefault();

        const response = await fetch('http://localhost:3000/SignUp', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, email, password }),
        });

        const data = await response.json();

        if (response.ok) {
            alert('Sign up successful!');
        } else {
            alert(`Error: ${data.message}`);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h1 className="text-2xl font-bold text-center text-blue-800 mb-5">Create Your account</h1>
                <div className="flex justify-center mb-5">
                    <button className="w-1/2 bg-blue-500 text-white py-2 rounded-lg">Google</button>
                </div>
                <p className="text-center mb-5">or use your email</p>
                <form onSubmit={handleSignUp}>
                    <input 
                        type="text" 
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full p-2 mb-4 border border-gray-300 rounded-lg placeholder-opacity-50" 
                    />
                    <input 
                        type="email" 
                        placeholder="Your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-2 mb-4 border border-gray-300 rounded-lg" 
                    />
                    <input 
                        type="password" 
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full p-2 mb-6 border border-gray-300 rounded-lg" 
                    />
                    <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg mb-4">Sign up</button>
                </form>
                <p className="text-center">Already have an account?</p>
            </div>
        </div>
    );
};

export default SignUp;
