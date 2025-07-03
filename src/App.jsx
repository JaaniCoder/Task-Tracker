import { useState, useEffect } from 'react'
import TaskDashboard from './components/TaskDashboard'
import Login from './components/Login';

function App() {
  const [username, setUsername] = useState(null);

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) setUsername(storedUsername);
  }, []);

  const handleLogin = (name) => {
    setUsername(name);
  };

  return (
    <>
      {username ? <TaskDashboard username={username} /> : <Login onLogin={handleLogin} />}
    </>
  );
}

export default App;