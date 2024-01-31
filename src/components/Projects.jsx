/* eslint-disable react/no-unescaped-entities */
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projectsForFirstTab = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: "https://upload.wikimedia.org/wikipedia/en/8/81/Apollo_creed_promo.jpg",
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: "https://upload.wikimedia.org/wikipedia/en/8/81/Apollo_creed_promo.jpg",
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: "https://upload.wikimedia.org/wikipedia/en/8/81/Apollo_creed_promo.jpg",
    },
  ];
  const projectsForSecondTab = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: "https://upload.wikimedia.org/wikipedia/en/8/81/Apollo_creed_promo.jpg",
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: "https://upload.wikimedia.org/wikipedia/en/8/81/Apollo_creed_promo.jpg",
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: "https://upload.wikimedia.org/wikipedia/en/8/81/Apollo_creed_promo.jpg",
    },
  ];
  const projectsForThirdTab = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: "https://upload.wikimedia.org/wikipedia/en/8/81/Apollo_creed_promo.jpg",
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: "https://upload.wikimedia.org/wikipedia/en/8/81/Apollo_creed_promo.jpg",
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: "https://upload.wikimedia.org/wikipedia/en/8/81/Apollo_creed_promo.jpg",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Capstone</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Split</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">This</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                      {projectsForFirstTab.map((project, index) => (
                          <ProjectCard key={index} {...project} />
                        ))}
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                      {projectsForSecondTab.map((project, index) => (
                          <ProjectCard key={index} {...project} />
                        ))}
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Row>
                      {projectsForThirdTab.map((project, index) => (
                          <ProjectCard key={index} {...project} />
                        ))}
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}