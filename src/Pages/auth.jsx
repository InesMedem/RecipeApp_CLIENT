import { useState } from "react";
import axios from "axios";

const Auth = () => {
  return (
    <div>
      <Login />
      <Register />
    </div>
  );
};

export default Auth;

//! LOGIN

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    // Handle login submit logic here
  };

  return (
    <Form
      username={username}
      setUsername={setUsername}
      password={password}
      setPassword={setPassword}
      label="Login"
      onSubmit={onSubmit}
      idPrefix="login"
    />
  );
};

//! REGISTER

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("http://localhost:3001/auth/register", {
        username,
        password,
      });
      alert("Registration Completed! Now login.");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Form
      username={username}
      setUsername={setUsername}
      password={password}
      setPassword={setPassword}
      label="Register"
      onSubmit={onSubmit}
      idPrefix="register"
    />
  );
};

//! COMPONENT

const Form = ({
  username,
  setUsername,
  password,
  setPassword,
  label,
  onSubmit,
  idPrefix,
}) => {
  return (
    <div className="auth-container">
      <form onSubmit={onSubmit}>
        <h2 id={`${idPrefix}-label`}>{label}</h2>

        <div className="form-group">
          <label htmlFor={`${idPrefix}-username`}>Username:</label>
          <input
            type="text"
            id={`${idPrefix}-username`}
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor={`${idPrefix}-password`}>Password:</label>
          <input
            type="password"
            id={`${idPrefix}-password`}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <button type="submit">{label}</button>
      </form>
    </div>
  );
};
