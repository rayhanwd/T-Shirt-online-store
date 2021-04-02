import { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Admin from './Components/Admin/Admin';
import LogIn from './Components/LogIn/LogIn';
import Order from './Components/Order/Order';

import PrivateRoute from './PrivateRoute/PrivateRoute';
import ProductDetails from './Components/ProductDeatils/ProductDetails';
import AddProducts from './Components/Admin/AddProducts/AddProducts';
import Manage from './Components/Admin/ManageProducts/Manage';
export const UserContext = createContext();
function App() {
  const [logInUser, setLogInUser] = useState({});

  return (
   <div className="App">
      <UserContext.Provider value={[logInUser, setLogInUser]}>
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <PrivateRoute path="/order">
            <Order></Order>
          </PrivateRoute>

          <PrivateRoute path="/addproduct">
            <AddProducts></AddProducts>
          </PrivateRoute>
          <PrivateRoute path="/manageproduct">
         <Manage></Manage>
          </PrivateRoute>
          <PrivateRoute path="/admin">
            <Admin></Admin>
          </PrivateRoute>
          <PrivateRoute path="/deals">
            <Home></Home>
          </PrivateRoute>
          <Route path="/login">
            <LogIn></LogIn>
          </Route>
          <PrivateRoute exact path="/products/:code">
            <ProductDetails></ProductDetails>
          </PrivateRoute>
          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
      </UserContext.Provider>
      </div>
  );
}

export default App;
