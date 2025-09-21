import { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './ProjectCarousel3D.css';

export const ProjectCarousel3D = ({ projects }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState(projects[0]);

  const nextProject = () => {
    const newIndex = (currentIndex + 1) % projects.length;
    setCurrentIndex(newIndex);
    setSelectedProject(projects[newIndex]);
  };

  const prevProject = () => {
    const newIndex = currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setSelectedProject(projects[newIndex]);
  };

  const selectProject = (index) => {
    setCurrentIndex(index);
    setSelectedProject(projects[index]);
  };

  return (
    <Container fluid>
      <Row>
        <Col md={8}>
          <div className="carousel-3d-container">
            <div className="carousel-3d">
              {projects.map((project, index) => {
                const offset = index - currentIndex;
                return (
                  <div
                    key={index}
                    className={`carousel-item ${offset === 0 ? 'active' : ''}`}
                    style={{
                      transform: `translateX(${offset * 120}px) translateZ(${Math.abs(offset) * -100}px) rotateY(${offset * 15}deg)`,
                      opacity: Math.abs(offset) > 2 ? 0 : 1 - Math.abs(offset) * 0.3,
                      zIndex: 10 - Math.abs(offset)
                    }}
                    onClick={() => selectProject(index)}
                  >
                    <div className="project-cube">
                      <div className="cube-face front">
                        <img src={project.imgUrl} alt={project.title} />
                      </div>
                      <div className="cube-face back">
                        <h4>{project.title}</h4>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            
            <div className="carousel-controls">
              <Button variant="outline-light" onClick={prevProject}>‹</Button>
              <Button variant="outline-light" onClick={nextProject}>›</Button>
            </div>
          </div>
        </Col>
        
        <Col md={4}>
          <div className="project-details-panel">
            <img 
              src={selectedProject.imgUrl} 
              alt={selectedProject.title}
              className="project-image"
            />
            <h3>{selectedProject.title}</h3>
            <p>{selectedProject.description}</p>
            {selectedProject.linkUrl && (
              <Button 
                variant="outline-light" 
                href={selectedProject.linkUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </Button>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
};