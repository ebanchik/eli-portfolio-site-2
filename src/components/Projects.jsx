/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { Container, Row, Col, Tab, Nav, Carousel } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import walkthrough from "../assets/img/split_mockups/split_walkthrough.mov";
import splitHomeImage from "../assets/img/split_mockups/split_home.png";
import splitLaunch from "../assets/img/split_mockups/split_launch.png";
import splitUpper1 from "../assets/img/split_mockups/split_upper1.png";
import splitSplits from "../assets/img/split_mockups/split-splits.png";
import armoireWalkthrough from "../assets/img/armoire-walkthrough.mov";

// ... (previous imports)

export const Projects = () => {
  const [carouselIndex, setCarouselIndex] = useState(0);

  const handleCarouselSelect = (selectedIndex) => {
    setCarouselIndex(selectedIndex);
  };

  const projects = [
    {
      title: "Split",
      description: "Ruby on Rails + Swift",
      media: [
        { type: "video", url: walkthrough },
        { type: "image", url: splitLaunch },
        { type: "image", url: splitHomeImage },
        { type: "image", url: splitUpper1 },
        { type: "image", url: splitSplits },
      ],
    },
    {
      title: "Armoire (in Progess)",
      description: (
        <>
          Flask + React (TypeScript)
          <br />
          <br />
          For my Capstone Project I would like to introduce you to Armoire, your personalized wardrobe organizer. Effortlessly log and catalog your clothing collection, creating a virtual closet at your fingertips. Seamlessly search, filter, and curate outfits like never before. Think of it as playlists for your wardrobe, where you can effortlessly mix and match your favorite items. Stay stylish, stay organized with Armoire.
        </>
      ),
      media: [
        { type: "video", url: armoireWalkthrough }
        // Add more media items as needed
      ],
    },
   
    {
      title: "Other Projects",
      description: (
        <>
          <li className="other-projects">
            This Website! (React.js)
            <br />
            _________________________
            <br />
            <br />
            Webscraper with node.js
            <br />
            _________________________
            <br />
            <br />
            E-commerce site (Rails backend, Limited React.js fronent)
             <br />
             _________________________
            <br />
            <br />
          </li>
        </>
      ),
      media: [
       
        // Add more media items as needed
      ],
    },
    // Add more projects as needed
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>
                  Explore a curated collection of my recent projects, each a testament to my evolving skill set and unwavering passion for the creative process. Every endeavor represents a journey of growth and fascination, and I am eager to share these experiences with you. Should any project pique your interest, please don't hesitate to reach out – I'm always thrilled to delve deeper into the details and insights behind each creation.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="0">
                      <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                        {projects.map((project, index) => (
                          <Nav.Item key={index}>
                            <Nav.Link eventKey={index.toString()}>{project.title}</Nav.Link>
                          </Nav.Item>
                        ))}
                      </Nav>
                      <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                        {projects.map((project, index) => (
                          <Tab.Pane key={index} eventKey={index.toString()}>
                            <Row>
                              <Col>
                                <div className="carousel-description">
                                  <p>{project.description}</p>
                                </div>
                                <Carousel
                                  activeIndex={carouselIndex}
                                  onSelect={handleCarouselSelect}
                                  interval={null} // Disable autoplay
                                  controls
                                  defaultActiveIndex={carouselIndex}
                                >
                                  {project.media.map((item, mediaIndex) => (
                                    <Carousel.Item key={mediaIndex}>
                                      {item.type === "video" ? (
                                        <video controls width="100%" height="100%">
                                          <source src={item.url} type="video/mp4" />
                                          Your browser does not support the video tag.
                                        </video>
                                      ) : (
                                        <img src={item.url} alt={`Media ${mediaIndex}`} className="d-block w-100" style={{
                                          height: "500px",
                                          objectFit: "contain"
                                        }} />
                                      )}
                                    </Carousel.Item>
                                  ))}
                                </Carousel>
                              </Col>
                            </Row>
                            <Row>
                              <Col>{/* ... other content ... */}</Col>
                            </Row>
                          </Tab.Pane>
                        ))}
                      </Tab.Content>
                    </Tab.Container>

                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};