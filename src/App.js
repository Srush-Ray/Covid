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
          <Route path="/Covid/" component={Covid} />
          <Route path="/" component={Covid} />
        </Switch>
      </BrowserRouter>
      <Covid />
    </div>
  );
}

export default App;
