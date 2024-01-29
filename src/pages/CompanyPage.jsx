import React from 'react';
import { Link, useParams } from 'react-router-dom';

function CompanyPage({ companies }) {
  const { companySlug } = useParams();

  const company = companies.find((e) => e.slug === companySlug);

  console.log('Company Page Data:', company);


  
  /*if (!company) {
    return <div>Company not found</div>;
  }*/

  return (
    <div>
      <h1>{company.name}</h1>
      <p>Website: <a href={company.website} target="_blank" rel="noopener noreferrer">{company.website}</a></p>
      <p>Description: {company.description}</p>
      <img src={company.logo} alt={`Logo of ${company.name}`} style={{ maxWidth: '200px' }} />

      <h2>Tech Stack</h2>
      <ul>
        {company.techStack.map((tech) => (
          <li key={tech.id}>
            <Link to={`/tech/${tech.slug}`}>
              <img src={tech.image} alt={`Logo of ${tech.name}`} style={{ maxWidth: '50px' }} />
              {tech.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}


export default CompanyPage;

/*function CompanyPage(props) {
  const { companiesData } = props;

  const { companySlug } = useParams();

  const companies = companiesData((oneCompany) => {
    return oneCompany.slug === companySlug;
  });

  return (
    <div id="company">
      <h1>Company Profile</h1>
      <div>
        <img src={companies.logo}/>
        <h1>{companies.name}</h1>
        <h2>About</h2>
        <p>{companies.description}</p>

        {companies.techStack.map((stackElement) => {
          return (
            <Link to={`/tech/${stackElement.slug}`} key={stackElement.image}>
              <div>
                <img src={stackElement.image}/>
                <h3>{stackElement.name}</h3>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default CompanyPage;*/
