import Login from "./components/login";
import Profile from "./components/profile";
import { useAuth } from "./providers/auth";

function App() {
  const { user } = useAuth();

  console.log(user);

  return (
    <div className="App">
      <h1>Login de Usuarios</h1>
      <Profile />
      <Login />
    </div>
  );
}

export default App;
