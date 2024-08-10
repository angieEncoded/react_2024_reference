import logo from '../assets/logo.png';
// import classes from './header.module.css'
import styled from 'styled-components';


// use the & to add all additional styles inside
const StyledHeader = styled.header`

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  margin-bottom: 2rem;

  & img {
    object-fit: contain;
    margin-bottom: 2rem;
    width: 11rem;
    height: 11rem;
  }
  
  & h1 {
    font-size: 1.5rem;
    font-weight: 600;
    letter-spacing: 0.4em;
    text-align: center;
    text-transform: uppercase;
    color: #9a3412;
    font-family: 'Pacifico', cursive;
    margin: 0;
  }
  
  & p {
    text-align: center;
    color: #a39191;
    margin: 0;
  }
  
  @media (min-width: 768px) {
    & {
      margin-bottom: 4rem;
    }
  
    & h1 {
      font-size: 2.25rem;
    }
  }
`


export default function Header() {
  return (
    <StyledHeader>
      <img src={logo} alt="A canvas" />
      <h1>ReactArt</h1>
      {/* inline styles - set as an object in dynamic syntax, use camelCast syntax for react properties*/}
      {/* <p style={{
        color:"red",
        textAlign: "left"
      }}>A community of artists and art-lovers.</p> */}
      {/* Interestingly, now we are doing this instead of classes[paragraph] */}
      {/* <p className={classes.paragraph}>A community of artists and art-lovers.</p> */}
      <p >A community of artists and art-lovers.</p>
    </StyledHeader>
  );
}
