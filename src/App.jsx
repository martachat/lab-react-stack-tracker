import companiesJSON from './companies.json';
import technologiesJSON from './technologies.json';
import Navbar from './components/Navbar';
import HomePage from "./pages/HomePage";
import CompanyPage from "./pages/CompanyPage";
import TechnologyPage from './pages/TechnologyPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<HomePage></HomePage>}></Route>
          <Route path='/company/:companySlug' element={<CompanyPage></CompanyPage>}></Route>
          <Route path='/tech/:slug' element={<TechnologyPage></TechnologyPage>}></Route>
        </Routes>
      </div>
    </Router>

  );
}

export default App;
