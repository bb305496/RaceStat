import {useState} from 'react'
import "./CSS/Register.css"
import Loading from "./Loading.jsx";

function Register() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [token, setToken] = useState(localStorage.getItem('token'));
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        if (!username || !email || !password) {
            setError("All fields are required");
            setSuccess(null);
            setLoading(false);
            return;
        }

        setError(null);
        setSuccess(null);

        const formData = {
            username: username,
            email: email,
            password: password,
        };

        try {
            const response = await fetch('http://localhost:8000/register/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const data = await response.json();
                localStorage.setItem('token', data.token);
                setToken(data.token);
                setSuccess("Successfully registered");
                setError(null);

                setUsername('');
                setEmail('');
                setPassword('');
                setLoading(false);
            } else {
                const errorData = await response.json();
                setError(errorData.message || "Username or email already exists");
                setSuccess(null);
                setLoading(false);
            }
        } catch (error) {
            setError("Unable to connect to the server");
            setLoading(false);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        setToken('');
        setUsername('');
        setEmail('');
        setPassword('');
        setSuccess(null);
        setError(null);
    }

    return(
        <div className="container">
            <div className="register-container">
                <div className="register-text">
                    <h1>Register</h1>
                </div>
                <form className="input-container"
                    onSubmit={handleSubmit}>
                    <input
                        className="input-register"
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        className="input-register"
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        className="input-register"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <br/>
                    <button className="button-register"
                        type="submit" disabled={loading}>
                        Register
                    </button>
                    <div>
                        {loading && <Loading/>}
                    </div>
                </form>
                <div className={`message-text ${
                    success ? 'success' : error ? 'error' : ''
                }`}>
                {success && <p>{success}</p>}
                {error && <p>{error}</p>}
                {(!success || !error) && <p></p>}
                </div>
            </div>
        </div>
    );

}

export default Register;