import { useState } from "react";

const Login = ({ onLogin }) => {
    const [username, setUsername] = useState('');

    const handleLogin = () => {
        if (username.trim()) {
            localStorage.setItem('username', username);
            onLogin(username);
        }
    };
    
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-2xl mb-4 font-bold">Login to Task Tracker</h1>
            <input type="text" placeholder="Enter Username" className="p-2 border rounded mb-2" value={username} onChange={(e) => setUsername(e.target.value)} />
            <button onClick={handleLogin} className="bg-blue-500 text-white px-4 py-2 rounded">Login</button>
        </div>
    );
};

export default Login;