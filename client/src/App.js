import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// pages
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Map from "./pages/Map";
import Login from "./pages/Login";
import SignUp from './pages/SignUp';
import { Container } from "react-bootstrap";

//components
import Nav from "./components/Nav";
import Header from "./components/Header";


function App() {
  return (
      <Router>
            <div className='app'>
                <Header />
                <Container>
                {/* <Nav /> */}
                <Switch>
                    <Route exact path='/' component={ Home } />
                    <Route exact path='/profile' component={ Profile } />
                    <Route exact path='/map' component={ Map } />
                    <Route exact path='/login' component={ Login } />
                    <Route exact path='/signup' component={ SignUp } />
                </Switch>
                </Container>
            </div>
      </Router>
  );
}

export default App;
