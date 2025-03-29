import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import FreeMap from "./components/FreeMap"

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/forgotPassword" component={ForgotPassword} />
        <Route path="/resetPassword" component={ResetPassword} />
        <Route path="/" component={FreeMap} exact />
      </Switch>
    </Router>
  )
}

export default App
