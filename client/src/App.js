import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/ShoppingCart";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
// import { StoreProvider } from "./utils/GlobalState";

function App() {
  return (
    <Router>
      <div>
        {/* <StoreProvider> */}
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/cart" component={Cart} />
            <Route component={NoMatch} />
          </Switch>
        {/* </StoreProvider> */}
      </div>
    </Router>
  );
}

export default App;