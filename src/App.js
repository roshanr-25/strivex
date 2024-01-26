import AnimRoutes from "./components/AnimRoutes";
import Header from "./components/Header";
import {BrowserRouter as Router} from "react-router-dom"
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";


function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Strivex</title>
      </Helmet>
      

      <Router>
        <Header/>
        <AnimRoutes/>
      </Router>
    </div>
  );
}

export default App;
