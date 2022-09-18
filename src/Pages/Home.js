import HomeTable from "../Images/Home.png";
import "./Home.css";
import Button from "../Components/Button";

const Home = () => {
  return (
    <section id="home">
      <div>
        <h2>
          Are you looking for <span>woodden furniture </span>
          for your place?
        </h2>
        <h3>This is the Right Place</h3>
        <Button name="Explore Categories" />
      </div>
      <div>
        <img src={HomeTable} alt="" />
      </div>
    </section>
  );
};

export default Home;
