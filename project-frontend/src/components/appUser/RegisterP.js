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
    const [isUnique, setIsUnique] = useState(true);

    const navigate = useNavigate();

    const checkUniqueUser = async (appUser) => {
        try {
            const resp = await getAllUsers();
            const users = resp.data;
            console.log(users);
            const userFound = users.find((user) => user.username === appUser);
            if (userFound) {
                console.log("user exists!");
                setIsUnique(false);
                setUsernameError("Username taken. Please choose a different username.");
            } else {
                console.log("user not found!");
                setIsUnique(true);
                setUsernameError("");
            }
        } catch (err) {
            console.log(err);
            setUsernameError("An error occurred while checking username availability. Please try again later.");
        }
    };

    const handleUsernameBlur = () => {
        if (registerData.username.length > 0) {
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
        console.log(evt.target.value);
        setRegisterData({
            ...registerData,
            [evt.target.name]: evt.target.value
        });
    };

    const submitRegister = (evt) => {
        console.log(registerData);
        register(registerData)
            .then((resp) => {
                if (resp.data[0].username) {
                    setRegisterData('');
                    setFailedRegister('');
                    alert(`Hi ${resp.data[0].username}! You've registered successfully. Redirecting you to login page...`);
                    navigate('/login');
                }
            })
            .catch((err) => {
                console.log(err);
                setRegisterData('');
                setFailedRegister('Please ensure that data you enter is accurate.');
            });
        evt.preventDefault();
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