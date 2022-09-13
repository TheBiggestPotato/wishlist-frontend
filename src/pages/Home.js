import HomeButton from "../components/HomeComponents/HomeButton/HomeButton";
import NavBar from "../components/NavBar/NavBar";
import HomeHeading from "../components/HomeComponents/HomeHeading/HomeHeading.js";
import { buttonTexts } from "./constants.js";

function Home() {
  return (
    <div className="container">
      <NavBar />
      <HomeHeading />
      <div className="buttons">
        {buttonTexts.map((text, key) => (
          <HomeButton key={key} buttonText={text}></HomeButton>
        ))}
      </div>
    </div>
  );
}

export default Home;
