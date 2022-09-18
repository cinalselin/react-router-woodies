import Footer from "../Components/Footer";
import flowerIcon from "../Images/flower-icon.svg";
import jensonTable from "../Images/Tisch.png";
import DeonChair from "../Images/Stuhl.png";
import KrishaBowl from "../Images/Schuesseln.png";
import "./Categories.css";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div>
      <main>
        <div className="article-header">
          <img src={flowerIcon} alt="flower icon" />
          <h4>What we have</h4>
          <hr />
          <p>PRODUCTS</p>
        </div>
        <section id="section-products">
          <article className="product-wrapper">
            <p>Jenson</p>
            <img src={jensonTable} alt="" />
            <button>
              <Link to="/categories/Jenson">Shop Now</Link>
            </button>
          </article>
          <article className="product-wrapper">
            <p>Deon</p>
            <img src={DeonChair} alt="" />
            <button>
              <Link to="/categories/Deon">Shop Now</Link>
            </button>
          </article>
          <article className="product-wrapper">
            <p>Krisha</p>
            <img src={KrishaBowl} alt="" />
            <button>
              <Link to="/categories/Krisha">Shop Now</Link>
            </button>
          </article>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Categories;
