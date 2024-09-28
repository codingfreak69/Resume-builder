import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:3000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            console.log('Response status:', response.status);
            console.log('Response data:', data);

            if (response.ok) {
                alert('Login successful!');
            } else {
                alert(`Error: ${data.message}`);
            }
        } catch (error) {
            console.error('Error during login request:', error);
            alert('An error occurred. Please try again.');
        }
    };

    return (
        <div className="min-h-screen flex bg-blue-100">
            <div className="w-1/2 bg-blue-100 h-1/2 p-8 flex flex-col mt-20 ml-20">
                <h1 className="text-3xl font-semibold text-blue-800 mb-6">Create a resume you are proud of</h1>
                <div className="flex items-center mb-4">
                    <img src={require('./images/Save time.png')} alt="Icon 1" className="h-10 w-10 mr-5" />
                    <p className="text-gray-700">Save time with hassle-free templates</p>
                </div>
                <div className="flex items-center mb-4">
                    <img src={require('./images/win.png')} alt="Icon 2" className="h-10 w-10 mr-5" />
                    <p className="text-gray-700">Beat the competition using affordable, contextual advice</p>
                </div>
                <div className="flex items-center mb-4">
                    <img src={require('./images/highlight.png')} alt="Icon 3" className="h-10 w-10 mr-5" />
                    <p className="text-gray-700">Highlight key achievements with memorable visuals</p>
                </div>
            </div>
            <div className="mt-10 w-1/3 bg-white w-[488px] h-[550px] border border-gray rounded-lg bg-white flex h-1/5 ml-0">
                <div className="bg-white p-8  w-full max-w-md">
                    <h1 className="text-2xl font-bold text-center text-blue-800 mb-5">Sign in to your account</h1>
                    <div className="flex justify-center mb-5">
                        <button className="w-1/2 bg-white-500 border border-gray-300 text-red-500 text py-2 rounded-lg hover:bg-red-600 hover:text-white">Google</button>
                    </div>
                    <form onSubmit={handleLogin}>
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
                        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg mb-4 hover:bg-sky-700">Sign in</button>
                    </form>
                    <p className="text-center mt-[170px]">
                        <Link to="/ForgotPassword" className="text-blue-500 font-semibold">Forgot Your Password?</Link>
                    </p>
                    <p className="text-center">
                        First time here? <Link to="/SignUp" className="text-blue-500 font-semibold">Create an account</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
