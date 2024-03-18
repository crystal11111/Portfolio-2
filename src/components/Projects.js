import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/SS505.jpeg";
import projImg2 from "../assets/img/app-demo.png";
import projImg3 from "../assets/img/project-organization.png";
import projImg4 from "../assets/img/cpr_project.jpg";
import tedx from "../assets/img/TedX.png";
import blueprint from "../assets/img/blueprint.png";
import spear from "../assets/img/spear.png";
import gamedev from "../assets/img/Game_project.png";
import dbms_project from "../assets/img/dbms_project.png";
import qrapp from "../assets/img/301app.png";
import slide_hacked from "../assets/img/slide_hacked.png"
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects_1 = [
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
    {
      title: "HackED Beta 2023",
      description: "CPR Tutorial website",
      imgUrl: projImg4,
      linkUrl: "https://github.com/HackEDBetaTeam2023/CPR_Tutorial_HackED_Beta",
    },
    {
      title: "Presentation",
      description: "Our final presentation",
      imgUrl: slide_hacked,
      linkUrl: "https://docs.google.com/presentation/d/1JlyydFMKoTvPRhHU-154pJmeqRa90JmyH901LC64uJM/edit?usp=sharing",
    }
  ];

  const projects_2 = [
    {
      title: "Speaker Liaison",
      description: "TEDxUAlberta",
      imgUrl: tedx,
      linkUrl: "https://tedxualberta.ca/",
    },
    {
      title: "Product Designer",
      description: "Blueprint UofA Chapter",
      imgUrl: blueprint,
      linkUrl: "https://uofa-blueprint.notion.site/Overview-of-Roles-b451d443aa104153910d5cd02ab5b98d",
    },
    {
      title: "Software Member - Sensory Integration",
      description: "SPEAR (Space Exploration Alberta Robotics)",
      imgUrl: spear,
      linkUrl: "https://www.spaceualberta.ca/",
    },
  ];

  const projects_3 = [
    {
      title: "Game development",
      description: "Created simple game for fun using Unity and C#.",
      imgUrl: gamedev,
      linkUrl: "https://github.com/crystal11111/Flying-Bird",
    },
    {
      title: "DBMS (Database Management System)",
      description: "Created DBMS for school project using MongoDB, NoSQL, and Python.",
      imgUrl: dbms_project,
      linkUrl: "https://drive.google.com/file/d/1wm_aCQeFoBxIWOTVqVJky575PaVmOGUz/view?usp=sharing",
    },
    {
      title: "QR Scanner App",
      description: "Creating an event management system using Java and Firebase.",
      imgUrl: qrapp,
      linkUrl: "https://github.com/CMPUT301W24T07/Quick-scanneR",
    }
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
                <p>Hackathon, personal projects, or school works that I did before.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Hackathon</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Club Activites</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Projects</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects_1.map((project, index) => {
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

                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          projects_2.map((project, index) => {
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

                    <Tab.Pane eventKey="third">
                      <Row>
                        {
                          projects_3.map((project, index) => {
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
      
                    <Tab.Pane eventKey="first">
                      <p>Seoul Women Tech Hackathon 2023 as a Moblie Developer. Was in charge of rewards system and safety resources.</p>
                      <p>HackED Beta 2023 as a Software Developer. Was in charge of leading the project. </p>

                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>If you wanna know more about me, check my LinkedIn and Connect ME!</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Check my GitHub for more projects!
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
