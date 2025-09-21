import { useState, useRef } from 'react';
import { Canvas, useFrame, extend, useThree } from '@react-three/fiber';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

extend({ OrbitControls });

const CameraControls = () => {
  const { camera, gl } = useThree();
  const controlsRef = useRef();
  
  useFrame(() => {
    if (controlsRef.current) {
      controlsRef.current.update();
    }
  });
  
  return (
    <orbitControls
      ref={controlsRef}
      args={[camera, gl.domElement]}
      enableZoom={true}
      enablePan={true}
      enableRotate={true}
      minDistance={5}
      maxDistance={20}
      enableDamping={true}
      dampingFactor={0.05}
    />
  );
};

const ProjectShape = ({ project, position, onClick, isSelected, index, selectedProject }) => {
  const meshRef = useRef();
  const starGroupRef = useRef();
  const [hovered, setHovered] = useState(false);
  
  const shapes = ['sphere', 'box', 'octahedron', 'dodecahedron', 'icosahedron'];
  const shapeType = shapes[index % shapes.length];
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.005;
      meshRef.current.rotation.y += 0.01;
      meshRef.current.rotation.z += 0.003;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + index) * 0.3;
      meshRef.current.position.x = position[0] + Math.cos(state.clock.elapsedTime * 0.5 + index) * 0.1;
      const scale = isSelected ? 1.4 : hovered ? 1.2 : 1;
      meshRef.current.scale.set(scale, scale, scale);
    }
    
    // Animate star group for Software Developer
    if (starGroupRef.current && project.title.includes('Software Developer')) {
      starGroupRef.current.rotation.x += 0.005;
      starGroupRef.current.rotation.y += 0.01;
      starGroupRef.current.rotation.z += 0.003;
      starGroupRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + index) * 0.3;
      starGroupRef.current.position.x = position[0] + Math.cos(state.clock.elapsedTime * 0.5 + index) * 0.1;
      const scale = isSelected ? 1.4 : hovered ? 1.2 : 1;
      starGroupRef.current.scale.set(scale, scale, scale);
    }
  });

  const getGeometry = () => {
    // Work experience - different shapes
    if (project.title.includes('Software Developer')) {
      return <octahedronGeometry args={[1.2]} />; // 3D star shape
    }
    if (project.title.includes('Teaching Assistant') ||
        project.title.includes('Research Assistant')) {
      return <sphereGeometry args={[1.0, 32, 32]} />; // Smooth planet
    }
    
    // Hackathon projects - crystalline shapes
    if (project.title.includes('Seoul Women Tech') || 
        project.title.includes('Demonstration Video') || 
        project.title.includes('Project Organization')) {
      return <octahedronGeometry args={[1]} />; // Crystal for Seoul Women Tech
    }
    if (project.title.includes('HackED Beta') || 
        project.title.includes('CPR Tutorial') ||
        project.title.includes('HackED Website') ||
        project.title.includes('Presentation')) {
      return <icosahedronGeometry args={[0.9]} />; // Complex crystal for HackED
    }
    if (project.title.includes('Morgan Stanley') || 
        project.title.includes('Code To Give') ||
        project.title.includes('Morgan Stanley Website') ||
        project.title.includes('Notion')) {
      return <dodecahedronGeometry args={[0.8]} />; // Geometric for Morgan Stanley
    }
    
    // Personal projects - unique shapes
    if (project.title.includes('Game development')) {
      return <boxGeometry args={[1.2, 1.2, 1.2]} />; // Cube for game
    }
    if (project.title.includes('DBMS') || project.title.includes('Database')) {
      return <cylinderGeometry args={[0.8, 0.8, 1.5, 8]} />; // Cylinder for database
    }
    if (project.title.includes('QR Scanner') || project.title.includes('QR')) {
      return <torusGeometry args={[0.8, 0.3, 8, 16]} />; // Torus for QR scanner
    }
    
    // Default sphere
    return <sphereGeometry args={[0.8, 20, 20]} />;
  };

  const getProjectColor = (projectTitle) => {
    // Hackathon projects - keep original colors
    if (projectTitle.includes('Seoul Women Tech') || 
        projectTitle.includes('Demonstration Video') || 
        projectTitle.includes('Project Organization')) {
      return '#ff6b6b'; // Red for Seoul Women Tech
    }
    if (projectTitle.includes('HackED Beta') || 
        projectTitle.includes('CPR Tutorial') ||
        projectTitle.includes('HackED Website') ||
        projectTitle.includes('Presentation')) {
      return '#4ecdc4'; // Cyan for HackED Beta
    }
    if (projectTitle.includes('Morgan Stanley') || 
        projectTitle.includes('Code To Give') ||
        projectTitle.includes('Morgan Stanley Website') ||
        projectTitle.includes('Notion')) {
      return '#feca57'; // Yellow for Code to Give
    }
    // Personal projects - bright distinct colors
    if (projectTitle.includes('Game development')) {
      return '#ff9500'; // Bright orange for game
    }
    if (projectTitle.includes('DBMS') || projectTitle.includes('Database')) {
      return '#dbff59ff';
    }
    if (projectTitle.includes('QR Scanner') || projectTitle.includes('QR')) {
      return '#00bfff'; // Deep sky blue for QR app
    }
    // Default colors for any other projects
    const defaultColors = ['#ae89f8ff', '#27ae60', '#f39c12', '#3498db'];
    return defaultColors[index % defaultColors.length];
  };
  
  const baseColor = getProjectColor(project.title);
  const isInSameGroup = selectedProject && 
    getProjectColor(project.title) === getProjectColor(selectedProject.title);
  
  const isWorkExperience = project.title.includes('Software Developer') || 
                          project.title.includes('Teaching Assistant') ||
                          project.title.includes('Research Assistant');

  return (
    <group>
      <mesh
        ref={meshRef}
        position={position}
        onClick={onClick}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        {getGeometry()}
        <meshStandardMaterial 
          color={isSelected ? '#ffffff' : hovered ? '#ffff00' : baseColor}
          transparent 
          opacity={project.title.includes('Software Developer') ? 0 : (isSelected ? 0.9 : isInSameGroup ? 0.8 : 0.7)}
          emissive={isSelected ? baseColor : isInSameGroup ? baseColor : hovered ? baseColor : '#000000'}
          emissiveIntensity={isSelected ? 0.5 : isInSameGroup ? 0.3 : hovered ? 0.2 : 0}
          roughness={0.3}
          metalness={0.4}
        />
      </mesh>
      
      {/* 3D Star - Software Developer */}
      {project.title.includes('Software Developer') && (
        <group ref={starGroupRef} position={position}>
          {/* Star points - 6 directions */}
          <mesh position={[1, 0, 0]} rotation={[0, 0, -Math.PI/2]}>
            <coneGeometry args={[0.2, 0.8, 6]} />
            <meshStandardMaterial color="#ffd700" emissive="#ffaa00" emissiveIntensity={0.3} />
          </mesh>
          <mesh position={[-1, 0, 0]} rotation={[0, 0, Math.PI/2]}>
            <coneGeometry args={[0.2, 0.8, 6]} />
            <meshStandardMaterial color="#ffd700" emissive="#ffaa00" emissiveIntensity={0.3} />
          </mesh>
          <mesh position={[0, 1, 0]} rotation={[0, 0, 0]}>
            <coneGeometry args={[0.2, 0.8, 6]} />
            <meshStandardMaterial color="#ffd700" emissive="#ffaa00" emissiveIntensity={0.3} />
          </mesh>
          <mesh position={[0, -1, 0]} rotation={[Math.PI, 0, 0]}>
            <coneGeometry args={[0.2, 0.8, 6]} />
            <meshStandardMaterial color="#ffd700" emissive="#ffaa00" emissiveIntensity={0.3} />
          </mesh>
          <mesh position={[0, 0, 1]} rotation={[Math.PI/2, 0, 0]}>
            <coneGeometry args={[0.2, 0.8, 6]} />
            <meshStandardMaterial color="#ffd700" emissive="#ffaa00" emissiveIntensity={0.3} />
          </mesh>
          <mesh position={[0, 0, -1]} rotation={[-Math.PI/2, 0, 0]}>
            <coneGeometry args={[0.2, 0.8, 6]} />
            <meshStandardMaterial color="#ffd700" emissive="#ffaa00" emissiveIntensity={0.3} />
          </mesh>
        </group>
      )}
      
      {/* Saturn - Teaching Assistant (elegant ring system) */}
      {project.title.includes('Teaching Assistant') && (
        <>
          {/* Main ring */}
          <mesh position={position} rotation={[Math.PI / 8, 0, 0]}>
            <torusGeometry args={[2.2, 0.12, 16, 100]} />
            <meshStandardMaterial 
              color="#daa520"
              transparent
              opacity={0.8}
              emissive="#b8860b"
              emissiveIntensity={0.3}
              metalness={0.6}
              roughness={0.2}
            />
          </mesh>
          {/* Inner ring */}
          <mesh position={position} rotation={[Math.PI / 8, 0, 0]}>
            <torusGeometry args={[1.9, 0.06, 12, 80]} />
            <meshStandardMaterial 
              color="#f4d03f"
              transparent
              opacity={0.6}
              emissive="#daa520"
              emissiveIntensity={0.2}
            />
          </mesh>
          {/* Ring particles */}
          {Array.from({ length: 20 }, (_, i) => {
            const angle = (i / 20) * Math.PI * 2;
            const radius = 2.0 + Math.random() * 0.4;
            return (
              <mesh key={`saturn-particle-${i}`} position={[
                position[0] + Math.cos(angle) * radius,
                position[1] + Math.sin(angle) * radius * Math.cos(Math.PI / 8),
                position[2] + Math.sin(angle) * radius * Math.sin(Math.PI / 8)
              ]}>
                <sphereGeometry args={[0.02]} />
                <meshBasicMaterial color="#ffd700" transparent opacity={0.7} />
              </mesh>
            );
          })}
        </>
      )}
      
      {/* Mars - Research Assistant (detailed red planet) */}
      {project.title.includes('Research Assistant') && (
        <>
          {/* Dust storm effect */}
          {Array.from({ length: 15 }, (_, i) => (
            <mesh key={`mars-dust-${i}`} position={[
              position[0] + (Math.random() - 0.5) * 4,
              position[1] + (Math.random() - 0.5) * 4,
              position[2] + (Math.random() - 0.5) * 4
            ]}>
              <sphereGeometry args={[0.03 + Math.random() * 0.02]} />
              <meshBasicMaterial 
                color={`hsl(${20 + Math.random() * 40}, 70%, ${40 + Math.random() * 20}%)`}
                transparent 
                opacity={0.4 + Math.random() * 0.3} 
              />
            </mesh>
          ))}
          {/* Polar ice caps with detail */}
          <mesh position={[position[0], position[1] + 0.95, position[2]]}>
            <sphereGeometry args={[0.25, 16, 16]} />
            <meshStandardMaterial 
              color="#ffffff" 
              transparent 
              opacity={0.9}
              emissive="#e6f3ff"
              emissiveIntensity={0.1}
            />
          </mesh>
          <mesh position={[position[0], position[1] - 0.95, position[2]]}>
            <sphereGeometry args={[0.18, 16, 16]} />
            <meshStandardMaterial 
              color="#f0f8ff" 
              transparent 
              opacity={0.8}
              emissive="#ddeeff"
              emissiveIntensity={0.05}
            />
          </mesh>
          {/* Surface features */}
          {Array.from({ length: 6 }, (_, i) => (
            <mesh key={`mars-crater-${i}`} position={[
              position[0] + Math.cos(i) * 0.8,
              position[1] + Math.sin(i) * 0.8,
              position[2] + Math.sin(i * 2) * 0.3
            ]}>
              <sphereGeometry args={[0.08]} />
              <meshStandardMaterial color="#8b4513" transparent opacity={0.6} />
            </mesh>
          ))}
        </>
      )}
      
      {(isSelected || hovered) && (
        <mesh position={position}>
          <torusGeometry args={[1.5, 0.05, 8, 32]} />
          <meshBasicMaterial 
            color={isSelected ? '#ffffff' : '#ffff00'}
            transparent
            opacity={0.6}
          />
        </mesh>
      )}
      
      {isSelected && [
        <mesh key="particle1" position={[position[0] + 2, position[1] + 1, position[2]]}>
          <sphereGeometry args={[0.05]} />
          <meshBasicMaterial color="#ffffff" />
        </mesh>,
        <mesh key="particle2" position={[position[0] - 1.5, position[1] - 1, position[2] + 1]}>
          <sphereGeometry args={[0.05]} />
          <meshBasicMaterial color="#ffffff" />
        </mesh>,
        <mesh key="particle3" position={[position[0] + 1, position[1] + 2, position[2] - 1]}>
          <sphereGeometry args={[0.05]} />
          <meshBasicMaterial color="#ffffff" />
        </mesh>
      ]}
    </group>
  );
};

export const MinimalProject3D = ({ projects }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  const positions = [
    [-6, 3, 2], [0, 4, -4], [6, 3, 1],
    [-7, 0, -5], [-2, 0, 3], [3, 0, -2], [8, 0, 4],
    [-5, -3, -3], [0, -4, 5], [5, -3, -1],
    [-3, 2, -6], [7, -2, 3]
  ];

  return (
    <Container fluid className="px-2">
      <Row className="g-3">
        <Col xs={12} lg={7}>
          <div style={{ 
            height: 'min(70vh, 500px)', 
            minHeight: '300px',
            background: '#0a0a0a', 
            borderRadius: '12px' 
          }}>
            <Canvas camera={{ position: [0, 0, 10] }}>
              <CameraControls />
              <ambientLight intensity={0.3} />
              <pointLight position={[10, 10, 10]} intensity={1.2} color="#4ecdc4" />
              <pointLight position={[-10, -10, -10]} intensity={0.8} color="#ff6b6b" />
              <pointLight position={[0, 15, 5]} intensity={0.6} color="#ffffff" />
              
              {Array.from({ length: 50 }, (_, i) => (
                <mesh key={`star-${i}`} position={[
                  (Math.random() - 0.5) * 30,
                  (Math.random() - 0.5) * 30,
                  (Math.random() - 0.5) * 30
                ]}>
                  <sphereGeometry args={[0.02]} />
                  <meshBasicMaterial color="#ffffff" />
                </mesh>
              ))}
              
              {projects.slice(0, 12).map((project, index) => (
                <ProjectShape
                  key={index}
                  project={project}
                  position={positions[index] || [0, 0, 0]}
                  onClick={() => setSelectedProject(project)}
                  isSelected={selectedProject?.title === project.title}
                  selectedProject={selectedProject}
                  index={index}
                />
              ))}
            </Canvas>
          </div>
        </Col>
        
        <Col xs={12} lg={5}>
          <div 
            style={{ 
              minHeight: '300px',
              background: 'linear-gradient(145deg, rgba(26, 26, 46, 0.95) 0%, rgba(22, 33, 62, 0.95) 50%, rgba(16, 20, 40, 0.95) 100%)', 
              color: 'white',
              borderRadius: '16px',
              border: '1px solid rgba(78, 205, 196, 0.4)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              position: 'relative',
              padding: 'clamp(0.75rem, 2vw, 1.5rem)'
            }}
          >
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'radial-gradient(circle at 20% 80%, rgba(78, 205, 196, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 107, 107, 0.1) 0%, transparent 50%)',
              borderRadius: '16px',
              pointerEvents: 'none'
            }} />
            
            {selectedProject ? (
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ marginBottom: '1rem' }}>
                  <img 
                    src={selectedProject.imgUrl} 
                    alt={selectedProject.title}
                    style={{ 
                      width: '100%', 
                      height: 'clamp(150px, 30vh, 200px)', 
                      objectFit: 'cover', 
                      borderRadius: '12px',
                      border: '2px solid #4ecdc4',
                      boxShadow: '0 4px 20px rgba(78, 205, 196, 0.3)'
                    }}
                  />
                  <div style={{
                    position: 'absolute',
                    top: '8px',
                    right: '8px',
                    background: 'rgba(78, 205, 196, 0.9)',
                    color: '#000',
                    padding: '4px 8px',
                    borderRadius: '12px',
                    fontSize: '0.7rem',
                    fontWeight: 'bold'
                  }}>FEATURED</div>
                </div>
                
                <h4 style={{ 
                  color: '#4ecdc4',
                  fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
                  fontWeight: '600',
                  marginBottom: '0.5rem'
                }}>
                  {selectedProject.title}
                </h4>
                
                <div style={{
                  width: '60px',
                  height: '3px',
                  background: 'linear-gradient(90deg, #4ecdc4, #45b7d1)',
                  borderRadius: '2px',
                  marginBottom: '1rem'
                }} />
                
                <div style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  padding: '1rem',
                  borderRadius: '10px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  marginBottom: '1rem'
                }}>
                  <p style={{
                    fontSize: 'clamp(0.85rem, 2vw, 1rem)',
                    lineHeight: '1.6',
                    margin: 0,
                    color: '#e0e0e0',
                    wordWrap: 'break-word',
                    overflowWrap: 'break-word',
                    width: '100%',
                    boxSizing: 'border-box',
                    textAlign: 'left',
                    whiteSpace: 'pre-line'
                  }}>{selectedProject.description}</p>
                </div>
                
                {selectedProject.linkUrl && (
                  <Button 
                    variant="outline-light" 
                    href={selectedProject.linkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    size="sm"
                    style={{
                      background: 'linear-gradient(45deg, rgba(78, 205, 196, 0.1), rgba(69, 183, 209, 0.1))',
                      borderColor: '#4ecdc4',
                      color: '#4ecdc4',
                      fontSize: 'clamp(0.8rem, 1.8vw, 0.9rem)',
                      padding: '8px 16px',
                      borderRadius: '20px',
                      fontWeight: '500'
                    }}
                  >
                    🚀 View Project
                  </Button>
                )}
              </div>
            ) : (
              <div className="text-center" style={{ position: 'relative', zIndex: 1, paddingTop: '2rem' }}>
                <div style={{
                  background: 'rgba(78, 205, 196, 0.1)',
                  padding: '1.5rem',
                  borderRadius: '16px',
                  border: '1px solid rgba(78, 205, 196, 0.2)',
                  marginBottom: '1rem'
                }}>
                  <h5 style={{ 
                    color: '#4ecdc4',
                    fontSize: 'clamp(1rem, 2.2vw, 1.25rem)',
                    fontWeight: '600',
                    marginBottom: '0.8rem'
                  }}>🌌 Project Galaxy</h5>
                  <p style={{
                    fontSize: 'clamp(0.75rem, 1.5vw, 0.9rem)',
                    color: '#e0e0e0',
                    margin: 0,
                    textAlign: 'center',
                    wordBreak: 'break-word',
                    overflowWrap: 'break-word',
                    whiteSpace: 'normal',
                    lineHeight: '1.4',
                    width: '100%',
                    boxSizing: 'border-box'
                  }}>Click on the floating shapes to explore my projects!</p>
                </div>
                
                <div style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  padding: '1rem',
                  borderRadius: '12px',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}>
                  <p style={{
                    fontSize: 'clamp(0.8rem, 1.6vw, 0.9rem)',
                    marginBottom: '0.8rem',
                    color: '#4ecdc4',
                    fontWeight: '500'
                  }}>🎮 Controls:</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span>🖱️</span>
                      <span style={{ fontSize: 'clamp(0.75rem, 1.5vw, 0.85rem)', color: '#ccc' }}>Drag to rotate view</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span>🔍</span>
                      <span style={{ fontSize: 'clamp(0.75rem, 1.5vw, 0.85rem)', color: '#ccc' }}>Scroll to zoom in/out</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span>👆</span>
                      <span style={{ fontSize: 'clamp(0.75rem, 1.5vw, 0.85rem)', color: '#ccc' }}>Click shapes to explore</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span>✨</span>
                      <span style={{ fontSize: 'clamp(0.75rem, 1.5vw, 0.85rem)', color: '#ccc' }}>Watch them float in space</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
};