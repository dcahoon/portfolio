import './App.css';
import { Route, Switch } from "react-router-dom"
import Header from "./Header"
import Home from "./Home"
import Contact from "./Contact"
import About from "./About"

function App() {
  return (
    <div className="App">
      <Header />

      <Switch>
        <Route path={"/contact"}>
          <Contact />
        </Route>
        <Route path={"/about"}>
          <About />
        </Route>
        <Route path={"/"}>
          <Home />
        </Route>
      </Switch>

    </div>
  );
}

export default App;
