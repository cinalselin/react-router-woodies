import Footer from "../Components/Footer";
import jensonTable from "../Images/Tisch.png";
import flowerIcon from "../Images/flower-icon.svg";

const ProductJenson = () => {
  return (
    <div>
      <main>
        <div className="article-header">
          <img src={flowerIcon} alt="flower icon" />
          <h4>Jenson</h4>
          <hr />
          <p>PRODUCTS</p>
        </div>
        <section id="section-products">
          <article className="product-wrapper">
            <img src={jensonTable} alt="" />
          </article>
          <p className="product-text">
            Jenson demonstrates what designer Tim Fenby does best. Clean lines,
            subtle curves and an oak finish nail this season's trends. Boomerang
            legs add serious style points – not that this dining table needs it.
            Nordic retro? You got it.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProductJenson;
