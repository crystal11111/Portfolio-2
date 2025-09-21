import { useState } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';

export const ProjectPagination = ({ projects, itemsPerPage = 6 }) => {
  const [currentPage, setCurrentPage] = useState(1);
  
  const totalPages = Math.ceil(projects.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProjects = projects.slice(startIndex, startIndex + itemsPerPage);

  return (
    <>
      <Row className="g-4">
        {currentProjects.map((project, index) => (
          <ProjectCard key={startIndex + index} {...project} />
        ))}
      </Row>
      
      {totalPages > 1 && (
        <Row className="mt-4">
          <Col className="text-center">
            <div className="pagination-controls">
              <Button 
                variant="outline-light" 
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(currentPage - 1)}
                className="me-2"
              >
                Previous
              </Button>
              
              <span className="mx-3 text-light">
                Page {currentPage} of {totalPages}
              </span>
              
              <Button 
                variant="outline-light"
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage(currentPage + 1)}
                className="ms-2"
              >
                Next
              </Button>
            </div>
          </Col>
        </Row>
      )}
    </>
  );
};