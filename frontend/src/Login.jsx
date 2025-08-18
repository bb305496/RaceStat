import { useState } from "react";
import {useNavigate} from "react-router-dom";
import "./CSS/RegisterAndLogin.css"
import Loading from "./Loading.jsx";
import useSound from "use-sound";

function Login({setToken}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const navigate = useNavigate();
    const [playSound] = useSound('/sound_effect.mp3',{
        volume: 0.25,
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        if(!username || !password){
            setError("All fields are required");
            setSuccess(null);
            setLoading(false);
            return;
        }

        setError(null);
        setSuccess(null);

        const formData = { username, password };

        try {
            const response = await fetch('http://localhost:8000/login/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if(response.ok) {
                const data = await response.json();
                setToken(data.token);
                setSuccess(`Welcome ${data.username}`);
                setError(null);
                playSound();

                setUsername('');
                setPassword('');
                setLoading(false)

                navigate('/')
            } else {
                const errorData = await response.json();
                setError(errorData.message || "Invalid username or password");
                setSuccess(null);
                setLoading(false)
            }
        } catch (error) {
            setError("Unable to connect to the server");
            setLoading(false);
        }
    }

    return (
      <div className="container">
          <div className="register-container">
              <div className="register-text">
                  <h1>Login</h1>
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
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                  <br/>
                  <button className="button-register" type="submit" disabled={loading}>
                      Login
                  </button>
                  <div>{loading && <Loading/>}</div>
              </form>
              <div className={`message-text 
                ${success ? 'success' : error ? 'error' : ''}`}>
                  {success && <p>{success}</p>}
                  {error && <p>{error}</p>}
              </div>
          </div>
      </div>
    );
}

export default Login;