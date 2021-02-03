import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Teacher from "./components/Teacher";
import Student from "./components/Student";
import Landing from "./components/Landing";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Route exact path='/' component={Landing} />
      <Route exact path='/teacher' component={Teacher} />
      <Route exact path='/student' component={Student} />
    </BrowserRouter>
  );
}

export default App;
