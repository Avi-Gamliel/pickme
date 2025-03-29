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
        <Route path="/register" element={<Register/>} />
        <Route path="/" element={<Login/>} />
        <Route path="/forgot-password" element={<ForgotPassword/>} />
        <Route path="/reset-password" element={<ResetPassword/>} />
        <Route path="/home" element={<FreeMap/>} exact />
      </Routes>
    </Router>
  )
}

export default App
