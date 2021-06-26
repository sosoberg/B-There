import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// pages
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Map from "./pages/Map";
import Login from "./pages/Login";

//components
import Nav from "./components/Nav";
import Header from "./components/Header";

function App() {
  return (
      <Router>
            <div>
                <Header />
                <Nav />
                <Switch>
                    <Route exact path='/' component={ Home } />
                    <Route exact path='/profile' component={ Profile } />
                    <Route exact path='/map' component={ Map } />
                    <Route exact path='/login' component={ Login } />
                </Switch>
            </div>
        </Router>
  );
}

export default App;
