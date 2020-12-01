import React from 'react';
import HomePage from "./components/HomePage";
import Nutrition from "./components/Nutrition";
import Strength from "./components/Strength";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";
import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom";

export default function App() {
    return (
        <Router>
          <>
            <Nav/>

            <Switch>
              <
              Route path = "/"
              exact
              component = {
                  HomePage
              }
              /> <
              Route path = "/Nutrition"
              component = {
                  Nutrition
              }
              /> <
              Route path = "/Strength"
              component = {
                  Strength
              }
              />
              <Route component={NotFound}/>
            </Switch>

           <Footer/>
         </>
       </Router>

    );
}
