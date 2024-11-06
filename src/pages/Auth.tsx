import React, { useState } from 'react';

const AuthPage: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleSignup = () => {
        // Handle signup logic here
        console.log('Signup:', email, password);
    };

    const handleLogin = () => {
        // Handle login logic here
        console.log('Login:', email, password);
    };

    return (
        <div>
            <h1>Auth Page</h1>
            <form>
                <h2>Signup</h2>
                <input type="email" placeholder="Email" value={email} onChange={handleEmailChange} />
                <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
                <button type="button" onClick={handleSignup}>Signup</button>
            </form>
            <form>
                <h2>Login</h2>
                <input type="email" placeholder="Email" value={email} onChange={handleEmailChange} />
                <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
                <button type="button" onClick={handleLogin}>Login</button>
            </form>
        </div>
    );
};

export default AuthPage;