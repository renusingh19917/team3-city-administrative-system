
// const Login = () => {
//     return (
//         <div>
//             <h1>Login Page</h1>
//         </div>
//     );
// };
// export default Login;

import React, { useState } from 'react';
import userService from '../../services/UserServiceD';
// import UserService from '../../UserService.js'

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = () => {
    const loginSuccessful = userService.login(username, password);

    if (loginSuccessful) {
      console.log('Login successful!');
      // You can implement further actions like setting a login state or redirecting to a new page.
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      <div>
        <label>Username: </label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div>
        <label>Password: </label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button onClick={handleLogin}>Login</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default Login;
