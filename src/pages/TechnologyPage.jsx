import { useParams } from 'react-router-dom'

function TechnologyPage(props) {

  const {slug} = useParams()

  let foundTech = props.technologies.find((tech) => {
    return tech.slug === slug
  })

  console.log(foundTech)

  if(!foundTech) {
    return <div>Tech not defined</div>
  }

  return (
    <div key={foundTech.id} id="technology">
    <h1>Technology Details</h1>
      <img src={foundTech.image} alt="" />
      <div>
        <h2>{foundTech.name}</h2>
        <p>{foundTech.description}</p>
      </div>
    </div>
  );
}

export default TechnologyPage;

