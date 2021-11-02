import { Container } from 'react-bootstrap';
import React, { useState } from 'react';
import './App.css';
import Header from './Components/header/Header'
import Sidebar from './Components/sidebar/Sidebar';
import Homescreen from './screens/homeScreen/Homescreen';

import './_app.scss'
import LoginScreen from './screens/homeScreen/loginScreen/Loginscreen';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { Redirect, useHistory } from 'react-router-dom'


function App() {


  const Layout = ({ children }) => {
    const [sidebar, toggleSidebar] = useState(false)

    const handleToggleSidebar = () => toggleSidebar(value => !value)
    return (
      <>
        <Header handleToggleSidebar={handleToggleSidebar} />
        <div className="app__container">
          <Sidebar sidebar={sidebar} handleToggleSidebar={handleToggleSidebar} />
          <Container fluid className="app__main" >
            {children}
          </Container>
        </div>
      </>
    )
  }
  return (
    <Router>
      <Switch>
      <Route path='/' exact>
        <Layout>
          <Homescreen />
        </Layout>
      </Route>

      <Route path='/auth'>
        <LoginScreen />
      </Route>

      <Route path='/search'>
        <Layout>
          <h1>Search Results</h1>
        </Layout>
      </Route>

      <Route>
        <Redirect to='/' />
      </Route>
      </Switch>
    </Router>
  );
}

export default App;
