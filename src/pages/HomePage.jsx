import React from "react";
import { useParams } from "react-router-dom";

function CompanyPage(props) {
  const { companiesData } = props;
  const { slug } = useParams();

  console.log("props:", props);


  // Find the company with the matching slug
  const selectedCompany = companiesData.find((company) => company.slug === slug);

  if (!selectedCompany) {
    // Handle the case when the company is not found
    return <div>Company not found</div>;
  }

  return (
    <div>
      <h1>
        <Link to={`/company/${selectedCompany.slug}`}>{selectedCompany.name}</Link>
      </h1>
      <p>Website: {selectedCompany.website}</p>
      <p>Description: {selectedCompany.description}</p>
      <img src={selectedCompany.logo} alt={`Logo of ${selectedCompany.name}`} />
  
      <h2>Tech Stack</h2>
      <ul>
        {selectedCompany.techStack.map((tech) => (
          <li key={tech.slug}>
            <img src={tech.image} alt={`Logo of ${tech.name}`} />
            <span>{tech.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CompanyPage;
