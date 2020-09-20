import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Blog from './Components/Blog/Blog';
import Booking from './Components/Booking/Booking';
import Contact from './Components/Contact/Contact';
import Destination from './Components/Destination/Destination';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import News from './Components/News/News';
import NotFound from './Components/NotFound/NotFound';
import SignUp from './Components/SignUp/SignUp';
const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/news">
          <News />
        </Route>
        <Route path="/destination">
          <Destination />
        </Route>
        <Route path="/blog">
          <Blog />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/booking">
          <Booking />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;