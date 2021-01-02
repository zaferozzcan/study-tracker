import "./App.css";
import { Switch, Route } from "react-router-dom";
import Register from "./components/auth/Register";

function App() {
  return (
    <div className="App">
      Hello World!
      <Switch>
        <Route exact path="user/register">
          <Register />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
