import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectGrid } from "../ui/ProjectGrid";
import { projectsData, tabsConfig } from "../../data/projectsData";
import colorSharp2 from "../../assets/img/color-sharp2.png";
// import '../ui/Project3DStyles.css';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

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
                    {tabsConfig.map(tab => (
                      <Nav.Item key={tab.key}>
                        <Nav.Link eventKey={tab.key}>{tab.label}</Nav.Link>
                      </Nav.Item>
                    ))}
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    {tabsConfig.map(tab => (
                      <Tab.Pane key={tab.key} eventKey={tab.key}>
                        <ProjectGrid projects={projectsData[tab.dataKey]} />
                      </Tab.Pane>
                    ))}
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background" />
    </section>
  )
}
