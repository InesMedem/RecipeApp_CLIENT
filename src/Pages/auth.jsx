import { useState } from "react";

const Auth = () => {
  return (
    <div>
      <Login />
      <Register />
    </div>
  );
};

export default Auth;

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="auth-container">
      <form>
        <h2>LOGIN</h2>

        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="text"
            id="username"
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <button type="submit">login</button>
      </form>
    </div>
  );
};

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Form
      username={username}
      setUsername={setUsername}
      password={password}
      setPassword={setPassword}
      label={label}
    />
  );
};

const Form = ({
  username,
  setUsername,
  password,
  setPassword,
  label,
  handleSubmit,
}) => {
  return (
    <div className="auth-container">
      <form>
        <h2 id="label">{label}</h2>

        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="text"
            id="username"
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <button type="submit"></button>
      </form>
    </div>
  );
};
