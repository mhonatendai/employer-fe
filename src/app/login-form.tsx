// pages/login.tsx


const Login: React.FC = () => {
  const [username, setUsername] = "";
  const [password, setPassword] = '';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your login logic here
    console.log('Logging in with:', { username, password });
  };

  return (
    <div>
      <h1>Login</h1>
      <form>
        <div>
          <label htmlFor="username">Username or Email:</label>
          <input
            type="text"
            id="username"
            value={username}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;