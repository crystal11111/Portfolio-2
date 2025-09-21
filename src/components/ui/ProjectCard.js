import { Col, Card } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, linkUrl }) => {
  return (
    <Col xs={12} sm={6} lg={4} className="mb-4">
      <Card className="project-card h-100" style={{ backgroundColor: 'transparent', border: '1px solid rgba(255,255,255,0.1)' }}>
        <div className="position-relative overflow-hidden" style={{ height: '200px' }}>
          <Card.Img 
            variant="top" 
            src={imgUrl} 
            alt={title}
            style={{ 
              height: '100%', 
              objectFit: 'cover',
              transition: 'transform 0.3s ease'
            }}
            className="project-img"
          />
        </div>
        <Card.Body className="d-flex flex-column text-white">
          <Card.Title className="h5 mb-2">{title}</Card.Title>
          <Card.Text className="flex-grow-1 text-muted">{description}</Card.Text>
          {linkUrl && (
            <a 
              href={linkUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-outline-light btn-sm mt-auto"
              style={{ width: 'fit-content' }}
            >
              View Project
            </a>
          )}
        </Card.Body>
      </Card>
    </Col>
  );
};