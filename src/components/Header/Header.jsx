import myImg from "../../assets/react-core-concepts.png"; // we have to add one extra dot cuz we cant diretcly access the img in te assets  cuz we are 
//we are in the componets folder so we need to go back to src and then assets  so one extra dot will make it to go back one step

import "./Header.css";

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header(){
const desc = reactDescriptions[genRandomInt(2)];
    return (
    <header>
      <img src={myImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {desc} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
    );
  }