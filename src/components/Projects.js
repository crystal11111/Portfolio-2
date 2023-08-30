import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/SS505.jpeg";
import projImg2 from "../assets/img/app-demo.png";
import projImg3 from "../assets/img/project-organization.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Seoul Women Tech Hackathon",
      description: "App Development & Design",
      imgUrl: projImg1,
      linkUrl: "https://github.com/crystal11111/SS505",
    },
    {
      title: "Demonstration Video",
      description: "Developed & Designed rewards system and safety resources page",
      imgUrl: projImg2,
      linkUrl: "https://www.youtube.com/watch?v=ppH2RVpqGBA",
    },
    {
      title: "Project Organization",
      description: "How we organized our project",
      imgUrl: projImg3,
      linkUrl: "https://docs.google.com/document/d/1GBis0i9fKuhcSfBoViEXF8PpGma_pQtqecefyGGgWuM/edit?usp=sharing",
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Hackathon, personal projects, or school works that I did before.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="first">
                      <p>Participated in Seoul Women Tech Hackathon 2023, worked as App Developer</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>If you wanna know more about me, check my LinkedIn and Connect ME!</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>My School Extracurricular Activites: TEDXUAlberta, AIESEC, Blueprint, and more!
                      </p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
