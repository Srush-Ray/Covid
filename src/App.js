import logo from "./logo.svg";
import "./App.css";
import Covid from "./Covid/Covid";
import {
  Switch,
  Route,
  withRouter,
  Link,
  NavLink,
  BrowserRouter,
  Router,
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Covid} exact />
          <Route path="/Covid/" component={Covid} exact />
        </Switch>
      </BrowserRouter>
      <Covid />
    </div>
  );
}

export default App;
