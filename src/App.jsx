import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { useState } from "react"
import Home from "./Pages/Home"
import CreatePost from "./Pages/CreatePost"
import Login from "./Pages/Login"
import "./App.css"
import { signOut } from "firebase/auth"
import { auth } from './firebase-config'

const App = () => {

  const auth = localStorage.getItem("auth");
  const handleLogout = () => {
    signOut(auth).then(() => {
      // setLoggedIn(false);
      localStorage.clear()
      window.location.pathname = "/login"
    })
  }



  return (
    <Router>
      <nav>
        <Link to="/">
          Home
        </Link>

        {!auth ?
          <Link to="/login">
            Login
          </Link> :
          <>
            <Link to="/createpost">
              Create Post
            </Link>
            <button onClick={handleLogout}>Logout</button>
          </>
        }
      </nav>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/createpost" element={<CreatePost />} />
        <Route exact path="/login"
          element={<Login />} />
      </Routes>
    </Router>
  )
}

export default App
