import { Link, useParams } from "react-router-dom";

function CompanyPage(props) {
  const { companiesData } = props;
  const { companySlug } = useParams();

  const companies = companiesData.find((oneCompany) => {
    return oneCompany.slug === companySlug;
  });

  return (
    <div>
      <h1>Company Profile</h1>
      {
        <div>
          <img src={companies.logo} width="200px" />
          <h1>{companies.name}</h1>
          <h2>About</h2>
          <p>{companies.description}</p>
          <div>
            {companies.techStack.map((stackElement) => {
              return (
                <Link
                  to={`/tech/${stackElement.slug}company=${companySlug}`}
                  key={stackElement.image}
                >
                  <div>
                    <div>
                      <img src={stackElement.image} />
                    </div>
                    <h3>{stackElement.name}</h3>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      }
    </div>
  );
}

export default CompanyPage;

