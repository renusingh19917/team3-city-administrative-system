import { useState } from "react";
import { useNavigate } from "react-router";
import AppUser from "../../models/AppUser";
import { login } from "../../services/UserServiceP";

const Login = () => {

    const [loginData, setLoginData] = useState(new AppUser());
    const [failedLogin, setFailedLogin] = useState('');
    const navigate = useNavigate();

    const handleLogin = (evt) => {
        console.log(evt.target.value);
        setLoginData({
            ...loginData,
            [evt.target.name]: evt.target.value
        });
    };

    const submitLogin = (evt) => {
        console.log(loginData);
        login(loginData.username)
            .then((resp) => {
                if (resp.data.username === loginData.username && resp.data.password === loginData.password) {
                    localStorage.setItem('loggedIn', true);
                    localStorage.setItem('currentProfile', JSON.stringify(resp.data));
                    alert(`Hi ${JSON.parse(localStorage.getItem('currentProfile')).username}! You've logged in successfully. Redirecting you to home...`);
                    setLoginData(new AppUser());
                    setFailedLogin('');
                    navigate('/home');
                } else {
                    setLoginData(new AppUser());
                    setFailedLogin('Invalid credentials!');
                }
            })
            .catch((err) => {
                console.log(err);
                setFailedLogin('Some error occurred. Login again !');
                setLoginData(new AppUser());
                localStorage.setItem('loggedIn', false);
                localStorage.removeItem('currentProfile');
            });
        evt.preventDefault();
    };

    return (
        <div>
            <h1>Login</h1>
            <div>
                <form onSubmit={submitLogin}>
                    <label for="username">Username:</label>
                    <input type="text" name="username" value={loginData.username} onChange={handleLogin} />

                    <label for="password">Password:</label>
                    <input type="password" name="password" value={loginData.password} onChange={handleLogin} />

                    <input type="submit" name="login" value="Login" />
                </form>
            </div>
            <p>{failedLogin}</p>
        </div>
    );
};

export default Login;