import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Form from "./Form";
import ForgotPass from "./ForgotPass";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" Component={Login} />
        <Route path="/form" Component={Form} />
        <Route path="/forgotPassword" Component={ForgotPass} />
      </Routes>
    </Router>
  );
};

export default App;
