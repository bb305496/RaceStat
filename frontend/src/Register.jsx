import {useState} from 'react'

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

        if (!username || !email || !password) {
            setError("All fields are required");
            setSuccess(null);
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
            } else {
                const errorData = await response.json();
                setError(errorData.message || "Username or email already exists");
                setSuccess(null);
            }
        } catch (error) {
            setError("Unable to connect to the server");
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
        <div>
            <h2>Register</h2>
            {success && <p>{success}</p>}
            {error && <p>{error}</p>}

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit" disabled={loading}>
                    Register
                </button>
            </form>
        </div>
    );

}

export default Register;