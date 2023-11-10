import { useState } from "react";
import { useNavigate } from "react-router";
import AppUser from "../../models/AppUser";
import { register, getAllUsers } from "../../services/UserServiceP";

const Register = () => {

    const [registerData, setRegisterData] = useState(new AppUser());
    const [failedRegister, setFailedRegister] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const navigate = useNavigate();

    const checkUniqueUser = async (appUser) => {
        try {
            const resp = await getAllUsers();
            const users = resp.data;
            console.log(users);
            const userFound = users.find((user) => user.username === appUser);
            if (userFound) {
                console.log("user exists!");
                setUsernameError("Username taken. Please choose a different username.");
            } else {
                console.log("user not found!");
                setUsernameError("");
            }
        } catch (err) {
            console.log(err);
            setUsernameError("An error occurred while checking username availability. Please try again later.");
        }
    };

    const handleUsernameBlur = () => {
        if (registerData.username) {
            checkUniqueUser(registerData.username);
        }
    };

    const handleEmailBlur = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(registerData.email)) {
            setEmailError('Invalid email format. Please enter a valid email address.');
        } else {
            setEmailError('');
        }
    };

    const checkPassword = () => {
        if (registerData.password !== registerData.confirmPassword)
            setPasswordError("Password doesn't match. Enter again.");
        else
            setPasswordError('');
    };

    const handleRegister = (evt) => {
        evt.preventDefault();
        const { name, value } = evt.target;
        if (!name || value === undefined) {
            return;
        }
        setRegisterData({
            ...registerData,
            [name]: value,
        });
    };

    const submitRegister = async (evt) => {
        evt.preventDefault();
    
        try {
            const resp = await register(registerData);
    
            if (resp.data.username && resp.status === 201) {
                alert(`Hi ${resp.data.username}! You've registered successfully. Redirecting you to login page...`);
                setRegisterData(new AppUser());
                setFailedRegister('');
                navigate('/login');
            } else {
                setFailedRegister('Please ensure that the data you enter is accurate.');
            }
        } catch (err) {
            console.error(err);
            setRegisterData(new AppUser());
            setFailedRegister('An error occurred during registration. Please try again.');
        }
    };
    

    return (
        <div>
            <h1>Register</h1>
            <div>
                <form onSubmit={submitRegister}>

                    <label for="username">Username:</label>
                    <input
                        type="text"
                        name="username"
                        value={registerData.username}
                        onChange={handleRegister}
                        onBlur={handleUsernameBlur}
                        required
                    />
                    {usernameError && <span className="error-message">{usernameError}</span>}

                    <label for="name">Name:</label>
                    <input type="text" name="name" value={registerData.name} onChange={handleRegister} required />

                    <label for="email">Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={registerData.email}
                        onChange={handleRegister}
                        onBlur={handleEmailBlur}
                        required
                    />
                    {emailError && <span className="error-message">{emailError}</span>}

                    <label for="pincode">Pincode:</label>
                    <input type="number" name="pincode" value={registerData.pincode} onChange={handleRegister} required />

                    <label for="password">Password:</label>
                    <input type="password" name="password" value={registerData.password} onChange={handleRegister} required />

                    <label for="confirmPassword">Confirm password:</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        value={registerData.confirmPassword}
                        onChange={handleRegister}
                        onBlur={checkPassword}
                        required />
                    {passwordError && <span className="error-message">{passwordError}</span>}

                    <input type="submit" name="register" value="Register" />
                </form>
            </div>
            <p>{failedRegister}</p>
        </div>
    );
};

export default Register;