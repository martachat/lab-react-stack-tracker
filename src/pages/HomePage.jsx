import { Link } from "react-router-dom";

function HomePage(props) {
  const { companiesData } = props;
  

  return (
    <div>
      <h1>StackTracker: Discover Tech Stacks Used by Top Companies</h1>
      {companiesData.map((company) => {
        return (
          <Link
          className="company-container"
              id="company-card"
              key={company.id}
              to={`/company/${company.slug}`}
            >
              <h2 id="company-logo-name">{company.name}</h2>
              <img src={company.logo} width="100px" />
            </Link>
        );
      })}
    </div>
  );
}

export default HomePage;
