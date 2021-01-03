import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route } from "react-router-dom";
import Register from "./components/auth/Register";

function App() {
  return (
    <div className="App">
      Hello World!
      <Switch>
        <Route exact path="/user/register" component={Register}></Route>
      </Switch>
    </div>
  );
}

export default App;
