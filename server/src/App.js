import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import GlobalStyle from "./globalStyles";
import Sweater from "./garments/Sweater";
import Skirt from "./garments/Skirt";
import Tshirt from "./garments/Tshirt";
import Dress from "./garments/Dress";
import Buttondown from "./garments/Buttondown";
import Trousers from "./garments/Trousers";
import Home from "./garments/Home";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/sweater">
          <Sweater />
        </Route>
        <Route exact path="/tshirt">
          <Tshirt />
        </Route>
        <Route exact path="/trousers">
          <Trousers />
        </Route>
        <Route exact path="/dress">
          <Dress />
        </Route>
        <Route exact path="/skirt">
          <Skirt />
        </Route>
        <Route exact path="/buttondown">
          <Buttondown />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
