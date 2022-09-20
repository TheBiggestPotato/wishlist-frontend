import HomeButton from "../components/HomeComponents/HomeButton/HomeButton";
import NavBar from "../components/NavBar/NavBar";
import HomeHeading from "../components/HomeComponents/HomeHeading/HomeHeading.js";
import Footer from "../components/Footer/Footer.js";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { myDetails } from "../api/index";

function Home() {
  const navigate = useNavigate();

  const [name, setName] = useState();
  const token = sessionStorage.getItem("token");

  async function getProfileData() {
    let data = await myDetails(token);

    setName(data.name);
  }

  function handleClickCreateList() {
    navigate("/lists/create");
  }

  function handleClickCreateGroup() {
    navigate("/groups/create");
  }

  function handleClickJoinGroup() {
    navigate("/items/create");
  }

  getProfileData();

  return (
    <div className="container">
      <NavBar />
      <HomeHeading name={name} />
      <div className="buttons">
        <HomeButton
          buttonText={"Create a List"}
          onClick={handleClickCreateList}
        ></HomeButton>
        <HomeButton
          buttonText={"Create a Group"}
          onClick={handleClickCreateGroup}
        ></HomeButton>
        <HomeButton
          buttonText={"Create an Item"}
          onClick={handleClickJoinGroup}
        ></HomeButton>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
