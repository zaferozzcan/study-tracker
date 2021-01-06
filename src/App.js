import "./App.css";
import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route } from "react-router-dom";
import Register from "./components/auth/Register";
import SignIn from "./components/auth/SignIn";
import Header from "./components/layout/Header";
import Banner from "./components/layout/Banner";
import { auth } from "./firebase";
import { useStateValue } from "./providers/StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();
  // console.log("auth in app js", auth);
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      // console.log("user ", authUser);

      if (authUser) {
        dispatch({
          type: "LOGIN_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "LOGIN_USER",
          user: null,
        });
      }
    });
  }, []);
  // console.log("signed in user", user.email);
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Header />
          <Banner />
        </Route>
        <Route exact path="/user/register">
          <Header />
          <Register />
        </Route>
        <Route exact path="/user/signin" component={SignIn}>
          <Header />
          <SignIn />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
