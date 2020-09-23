import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import Blog from './Components/Blog/Blog';
import Booking from './Components/Booking/Booking';
import Contact from './Components/Contact/Contact';
import Destination from './Components/Destination/Destination';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import News from './Components/News/News';
import NotFound from './Components/NotFound/NotFound';
import PrivateRout from './Components/PrivateRout/PrivateRout';
import SignUp from './Components/SignUp/SignUp';

export const UserContext = createContext();

const App = () => {
  const [loggedInUser, setLoggedInUser] = useState({});


  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/news">
            <News />
          </Route>
          <PrivateRout path="/destination">
            <Destination />
          </PrivateRout>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/booking">
            <Booking />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
};

export default App;