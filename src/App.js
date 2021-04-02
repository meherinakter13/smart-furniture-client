import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { createContext, useState } from 'react';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import NoMatch from './components/NoMatch/NoMatch';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Admin from './components/Admin/Admin';
import Checkout from './components/Checkout/Checkout';
import Orders from './components/Orders/Orders';
import ThankYou from './components/ThankYou/ThankYou';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value ={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Header></Header>
      <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <PrivateRoute path="/admin">
            <Admin></Admin>
          </PrivateRoute>
          <PrivateRoute path="/manageProduct">
            <Admin></Admin>
          </PrivateRoute>
          <PrivateRoute path="/addProduct">
            <Admin></Admin>
          </PrivateRoute>
          <PrivateRoute path ="/checkOut/:id">
             <Checkout></Checkout>
          </PrivateRoute>
          <PrivateRoute path ="/order">
             <Orders></Orders>
          </PrivateRoute>
          <PrivateRoute path ="/thankYou">
             <ThankYou></ThankYou>
          </PrivateRoute>
          <Route path="/login">
             <Login></Login>
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NoMatch></NoMatch>
          </Route>
        </Switch>
    </Router> 
    </UserContext.Provider>
  );
}

export default App;
