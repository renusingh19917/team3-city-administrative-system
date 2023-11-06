import { useState } from "react";
import { useNavigate } from "react-router";
import AppUser from "../../models/AppUser";
import { register, checkUniqueUser } from "../../services/UserService";

const Register = () => {

    const [registerData, setRegisterData] = useState(new AppUser());
    const [failedRegister, setFailedRegister] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [emailError, setEmailError] = useState('');

    const navigate = useNavigate();

    const handleRegister = (evt) => {
        e.preventDefault();
        console.log(evt.target);
        setRegisterData({
            ...registerData,
            [evt.target.name]: evt.target.value
        });
    };

    const handleUsernameBlur = () => {
        const isUnique = checkUniqueUser(formData.username);
        if (!isUnique) {
            setUsernameError('Username already exists. Please choose a different username.');
        } else {
            setUsernameError('');
        }
    };

    const handleEmailBlur = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setEmailError('Invalid email format. Please enter a valid email address.');
        } else {
            setEmailError('');
        }
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
                    <input
                        type="text"
                        name="username"
                        value={registerData.username}
                        onChange={handleRegister}
                        onBlur={handleUsernameBlur}
                        required
                    />
                    {usernameError && <span className="error-message">{usernameError}</span>}
                    <input type="text" name="name" value={registerData.name} onChange={handleRegister} required />
                    <input
                        type="email"
                        name="email"
                        value={registerData.email}
                        onChange={handleRegister}
                        onBlur={handleEmailBlur}
                        required
                    />
                    {emailError && <span className="error-message">{emailError}</span>}
                    <input type="number" name="pincode" value={registerData.pincode} onChange={handleRegister} required />
                    <input type="password" name="password" value={registerData.password} onChange={handleRegister} required />
                    <input type="submit" name="register" value="Register" />
                </form>
            </div>
            <p>{failedRegister}</p>
        </div>
    );
};

export default Register;