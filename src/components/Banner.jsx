import { useState, useEffect } from "react"
import { Container, Row, Col } from "react-bootstrap"
import linkedinMockup from "../assets/img/eli-linkedin-mockup.png"
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = [ "Eli Banchik.", "a Web Developer.", "a Software Engineer.", "a Web Designer."];
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(200 - Math.random() * 50)
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta)

    return () => { clearInterval(ticker)};
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta /2)
    }
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if(isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(200 - Math.random() * 50);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={4} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>{`Hi I'm `} <span className="txt-rotate" data-period="1000" data-rotate='[ "Web Developer", "Software Engineer", "Web Designer"]'><span className="wrap">{text}</span></span></h1>
                  <p>A bit about me in this section I will write about myself and why I should be employed</p>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={8} xl={5} className="d-flex justify-content-end">
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img
                    src={linkedinMockup}
                    alt="Header Img"
                    style={{ marginRight:"-200px", marginTop:"-150px" }}
                    className="d-none d-md-block"  // Hide on xs and sm screens, visible on md and larger screens
                  />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
