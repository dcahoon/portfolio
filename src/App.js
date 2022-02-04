import './App.css';
import Header from "./Header"
import Home from "./Home"
import Contact from "./Contact"

function App() {
  return (
    <div className="App">
      <Header />

      <Switch>
        <Route path={"/contact"}>
          <Contact />
        </Route>
        <Route path={"/"}>
          <Home />
        </Route>
      </Switch>



    </div>
  );
}

export default App;
