// accepting props - can destructure right inside here as well
// function CoreConcept({title, description, image})
export default function CoreConcept(props) { // or just get props
  // const {title, image, description} = props; // and destructure in here if you want
  return (
    <li>
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  )
}