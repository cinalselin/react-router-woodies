import Footer from "../Components/Footer";
import flowerIcon from "../Images/flower-icon.svg";
import aboutSalad from "../Images/About.png";
import "./About.css";

const About = () => {
  return (
    <div>
      <main>
        <div className="article-header">
          <img src={flowerIcon} alt="flower icon" />
          <h4>Who we are</h4>
          <hr />
          <p>ABOUT US</p>
        </div>
        <article>
          <img src={aboutSalad} alt="Salad" />
          <div>
            <h3>
              WOODIES <span>is the</span> home of modern wooden furniture
            </h3>
            <p>
              the answer to your need for furniture with shapes, sizes and
              colors.
            </p>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default About;
