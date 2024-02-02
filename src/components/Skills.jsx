/* eslint-disable react/no-unescaped-entities */
import { Container, Row, Col } from "react-bootstrap"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import rubyLogo from "../assets/logos/ruby-logo.png";
import python from "../assets/logos/python-logo.png";
import js from "../assets/logos/js-logo.png";
import html from "../assets/logos/html-css-logo.png";
import react from "../assets/logos/react-logo.png";
import ts from "../assets/logos/ts-logo.png";
import rails from "../assets/logos/rails-logo.png";
import vue from "../assets/logos/vue-logo.png";
import flask from "../assets/logos/flask-logo.png";
// import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
          <div className="skill-bx">
            <h2>
              Skills
            </h2>
            <p>
              show don't tell.
            </p>
              <Carousel 
              className="skills-slider"
              infinite={true} 
              responsive={responsive} 
              draggable={true} >
                <div className="item">
                  <img src={rubyLogo} width="100px" height="100px" alt="Image" />
                  <h5>Ruby</h5>
                </div>
                <div className="item">
                  <img src={python} width="100px" height="100px" alt="Image" />
                  <h5>Python3</h5>
                </div>
                <div className="item">
                  <img src={js} width="100px" height="100px" alt="Image" />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <img src={html} width="200px" height="100px" alt="Image" />
                  <h5>HTML + CSS</h5>
                </div>
                <div className="item">
                  <img src={react} width="100px" height="100px" alt="Image" />
                  <h5>React</h5>
                </div>
                <div className="item">
                  <img src={ts} width="100px" height="100px" alt="Image" />
                  <h5>TypeScript</h5>
                </div>
                <div className="item">
                  <img src={rails} width="100px" height="100px" alt="Image" />
                  <h5>Ruby on Rails</h5>
                </div>
                <div className="item">
                  <img src={vue} width="100px" height="100px" alt="Image" />
                  <h5>Vue</h5>
                </div>
                <div className="item">
                  <img src={flask} width="100px" height="100px" alt="Image" />
                  <h5>Flask</h5>
                </div>
                {/* <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Tall</h5>
                </div> */}
              </Carousel>
          </div>
          </Col>
        </Row>
      </Container>
      {/* <img className="background-mage-left" src={colorSharp} /> */}
    </section>
  )
}