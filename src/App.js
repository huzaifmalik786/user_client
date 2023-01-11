import React,{createContext,useReducer} from 'react';
import './App.css';
import { Route, Routes,BrowserRouter as Router } from 'react-router-dom';
import Header from './components/header';
import Home from './pages/Home';
import Register from './pages/Register';
import Signin from './pages/Signin';
import Logout from "./pages/Logout";
import 'bootstrap/dist/css/bootstrap.min.css';
import {initialState, reducer} from './reducer/UseReducer.js';

export const UserContext=createContext();

function App() {
  const [state,dispatch] = useReducer(reducer, initialState);
  return (
    <UserContext.Provider value={{state, dispatch}}>
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Signin/>}/>
          <Route path="/logout" element={<Logout/>}/>
        </Routes>
      </Router>
    </div>
    </UserContext.Provider>
  );
}

export default App;
