import React from "react";
import Nav from "../components/Nav";
import Btn from "../components/Btn";
import Card from "../components/Card";
import Subtitle from "../components/Subtitle";

import img5 from "../assets/image 16.png";
import img6 from "../assets/beef-burger.avif";
import img7 from "../assets/crispy-comte-cheesburgers-FT-RECIPE0921-6166c6552b7148e8a8561f7765ddf20b.jpg";
import img8 from "../assets/image.webp";
import img9 from "../assets/MSG-Smash-Burger-FT-RECIPE0124-d9682401f3554ef683e24311abdf342b.jpg";
import img10 from "../assets/The-Mack-Burger-recipe-scaled.jpg";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Nav />

      <section className="menu">
        <div className="menu-grid">

          {/* Card 1 */}
          <article className="food-card">
            <div className="food-img">
              <img src={img5} alt="Classic Cheeseburger" />
            </div>

            <div className="food-body">
              <Card title="Classic Cheeseburger" price="$4.99" />
              <Subtitle text="Ground beef, Cheese, Burger bun, Lettuce, Egg, Pickled cucumbers, Sliced tomatoes." />
              <Btn />
            </div>
          </article>

          {/* Card 2 */}
          <article className="food-card">
            <div className="food-img">
              <img src={img6} alt="Double Burger" />
            </div>

            <div className="food-body">
              <Card title="Double Burger" price="$6.99" />
              <Subtitle text="Grilled chicken, fresh lettuce, cheddar cheese and special sauce." />
              <Btn />
            </div>
          </article>

          {/* Card 3 */}
          <article className="food-card">
            <div className="food-img">
              <img src={img7} alt="Chicken Burger" />
            </div>

            <div className="food-body">
              <Card title="Chicken Burger" price="$5.49" />
              <Subtitle text="Beef patty, Swiss cheese, caramelized onions, crispy bacon and BBQ sauce." />
              <Btn />
            </div>
          </article>

          {/* Card 4 */}
          <article className="food-card">
            <div className="food-img">
              <img src={img8} alt="Spicy Burger" />
            </div>

            <div className="food-body">
              <Card title="Spicy Burger" price="$5.99" />
              <Subtitle text="Crispy fried chicken, iceberg lettuce, mayo and pickles." />
              <Btn />
            </div>
          </article>

          {/* Card 5 */}
          <article className="food-card">
            <div className="food-img">
              <img src={img9} alt="BBQ Burger" />
            </div>

            <div className="food-body">
              <Card title="BBQ Burger" price="$7.99" />
              <Subtitle text="Double beef, cheddar cheese, grilled mushrooms and garlic sauce." />
              <Btn />
            </div>
          </article>

          {/* Card 6 */}
          <article className="food-card">
            <div className="food-img">
              <img src={img10} alt="Mushroom Burger" />
            </div>

            <div className="food-body">
              <Card title="Mushroom Burger" price="$6.49" />
              <Subtitle text="Spicy chicken fillet, jalapeños, pepper jack cheese and hot sauce." />
              <Btn />
            </div>
          </article>

        </div>
      </section>

     <Footer />

    </>
  );
};

export default Home;