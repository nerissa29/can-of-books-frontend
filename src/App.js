import React from 'react';
import Header from './Header';
import About from './About';
import Footer from './Footer';
import BestBooks from './BestBooks';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './App.css'
// import axios from 'axios';

class App extends React.Component {
  
  render() { 
    return (
      <>
        <Router>
          <Header />
          <Routes>
            <Route 
              exact path="/"
              element={<BestBooks />}
            >
              
            </Route>
              <Route path="/about"
              element ={<About/>}
              >
            </Route>
          </Routes>
          <Footer />
        </Router>
      </>
    )
  }
}

export default App;
