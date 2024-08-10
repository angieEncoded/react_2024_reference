import reactImg from '../assets/react-core-concepts.png' // this will ensure we dont lose our image during the build - we can name it whatever


export default function Header() {
  // Javascript can be placed here

  // simulate basic dynamic content
  const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];
  function genRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
  }
  const description = reactDescriptions[genRandomInt(2)] // create a constant to clean up the jsx below

  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {/* How we get it into react */}
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  )
}