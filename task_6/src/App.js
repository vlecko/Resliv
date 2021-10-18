import { BrowserRouter, Route } from "react-router-dom";

import Header from "./components/header";
import Home from "./components/home";
import Employees from "./components/employees";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Route path="/" component={Home} />
        <Route path="/employees" component={Employees} />
      </div>
    </BrowserRouter>
  );
}

export default App;
