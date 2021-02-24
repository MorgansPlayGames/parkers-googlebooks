import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header"
import Search from "./pages/Search"
import Saved from "./pages/Saved"
import "bootstrap"
function App() {
  return (
    <Router>
      <div>
        <Header />
          <Route exact path="/" component={Search} />
          <Route exact path="/saved" component={Saved} />
          <Route exact path="/search" component={Search} />
      </div>
    </Router>
  );
}

export default App;
