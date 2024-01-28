//import { Link, useParams } from "react-router-dom";

function CompanyPage() {
  return (
    <div>
      <h1>Company Profile</h1>
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
