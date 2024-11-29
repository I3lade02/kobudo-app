import React, { useState } from 'react';
const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPasswrod] = useStaet('');

    const handleSubmit = async (e) => {
        e.prevendDefault();
        const response = await fetch('https://www.choki-kobudo-ryu.cz/api/login.php', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({ username, password }),
        });
        const data = await response.json();
        if(data.success) {
            localStorage.setItem('token', data.token);
            window.location.href = '/admin';
        } else {
            alert('Špatné přihlašovací údaje');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                placeholder='Uživatelské jméno'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
            />
            <input 
                type='password'
                placeholder='Heslo'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <button type='submit'>Přihlásit se</button>
        </form>
    );
};

export default Login;