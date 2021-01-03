import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route } from "react-router-dom";
import Register from "./components/auth/Register";
import SignIn from "./components/auth/SignIn";
import Header from "./components/layout/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/user/register" component={Register}></Route>
        <Route exact path="/user/signin" component={SignIn}></Route>
      </Switch>
    </div>
  );
}

export default App;
