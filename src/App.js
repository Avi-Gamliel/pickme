import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import FreeMap from "./components/FreeMap"
import Login from "./pages/Login"
import Register from "./pages/Register"
import ForgotPassword from "./pages/ForgotPassword"
import ResetPassword from "./pages/ResetPassword"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" elements={<Register/>} />
        <Route path="/login" elements={<Login/>} />
        <Route path="/forgotPassword" elements={<ForgotPassword/>} />
        <Route path="/resetPassword" elements={<ResetPassword/>} />
        <Route path="/" elements={<FreeMap/>} exact />
      </Routes>
    </Router>
  )
}

export default App
