import { Container } from 'react-bootstrap';
import React, { useState,useEffect} from 'react';
import './App.css';
import Header from './Components/header/Header'
import Sidebar from './Components/sidebar/Sidebar';
import Homescreen from './screens/homeScreen/Homescreen';
import { useSelector } from 'react-redux'

import './_app.scss'
import LoginScreen from './screens/homeScreen/loginScreen/Loginscreen';
import {
  Switch,
  Route,
} from "react-router-dom";

import { Redirect, useHistory } from 'react-router-dom'
import WatchScreen from './screens/watchScreen/WatchScreen';


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

  const { accessToken, loading } = useSelector(state => state.auth)
  const history  =  useHistory()

  useEffect(() => {
    if(!accessToken && !loading){
   history.push('/auth')
    }
  }, [accessToken, loading, history])
  
  return (
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
      <Route path='/watch:id'>
        <Layout>
          <WatchScreen/>
        </Layout>
      </Route>

      <Route>
        <Redirect to='/' />
      </Route>

      
      </Switch>
  );
}

export default App;
