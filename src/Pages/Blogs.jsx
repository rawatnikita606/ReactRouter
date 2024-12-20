import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Carousel } from "react-bootstrap";
import slide1 from './image1.png'

const Blogs = () => {
  return (
    <div>
      <Header />
      <Carousel className="mb-4">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slide1}
            alt="First slide"
            height="400px"

          />
          <Carousel.Caption>
            <h3>First Slide Label</h3>
            <p>Some representative text for the first slide.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slide1}
            alt="Second slide"
            height="400px"
          />
          <Carousel.Caption>
            <h3>Second Slide Label</h3>
            <p>Some representative text for the second slide.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slide1}
            alt="Third slide"
            height="400px"

          />
          <Carousel.Caption>
            <h3>Third Slide Label</h3>
            <p>Some representative text for the third slide.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
        nostrum officia ipsa reprehenderit impedit? Quasi sed, quod, iusto
        molestiae deleniti numquam sapiente necessitatibus fugit quidem
        temporibus cum accusamus magni eligendi aut non modi eaque, eum ipsam!
        Praesentium velit voluptate quaerat animi consequuntur reiciendis odio
        mollitia illum repellendus saepe. Vero enim harum omnis perspiciatis,
        esse mollitia deleniti, tempore provident eius ducimus, odit saepe
        nostrum. Excepturi quibusdam aperiam accusantium sunt, reprehenderit
        rerum necessitatibus cumque nesciunt odio eius reiciendis minus,
        perferendis itaque sit? Delectus adipisci, ratione velit exercitationem
        alias magni quibusdam autem sunt deserunt nisi. Nobis ipsam id quos
        amet veritatis consequuntur eveniet.
      </p>

      <Footer />
    </div>
  );
};

export default Blogs;
