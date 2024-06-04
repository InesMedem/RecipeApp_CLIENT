import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/home";
import Auth from "./Pages/auth";
import SavedRecipes from "./Pages/SavedRecipes";
import CreateRecipes from "./Pages/CreateRecipes";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/create-recipe" element={<CreateRecipes />} />
          <Route path="/saved-recipe" element={<SavedRecipes />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
