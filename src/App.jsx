import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
//import Companies from ".src/pages/test/companies.json"
//import Technologies from ".src/pages/test/technologies.json"
import CompanyPage from "./pages/CompanyPage";
import TechnologyPage from "./pages/TechnologyPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App">
    <Navbar></Navbar>
    <Routes>
      <Route path="/" element={<HomePage></HomePage>}></Route>
      <Route path="/company/:companySlug" element={<CompanyPage></CompanyPage>}></Route>
      <Route
        path="/tech/:slug"
        element={<TechnologyPage></TechnologyPage>}
      ></Route>
      </Routes>
    </div>
  );
}

export default App;
