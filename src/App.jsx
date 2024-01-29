import "./App.css";
import companiesJSON from "./companies.json";
import technologiesJSON from "./technologies.json";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import CompanyPage from "./pages/CompanyPage";
import TechnologyPage from "./pages/TechnologyPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route
          path="/"
          element={<HomePage companiesData={companiesJSON}></HomePage>}
        ></Route>
        <Route
          path="/company/:companySlug"
          element={<CompanyPage companiesData={companiesJSON}></CompanyPage>}
        ></Route>
        <Route
          path="/tech/:slug"
          element={<TechnologyPage technologies={technologiesJSON}></TechnologyPage>}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
