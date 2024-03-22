import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faGlobe, faGlassCheers, faCab, faSatellite, faRobot } from '@fortawesome/free-solid-svg-icons';

const Services = () => {
  return (
    <section className="py-5 text-center">
      <Container>
        <h2 className="text-center">Our Services</h2>
        <p className="text-muted mb-5 text-center">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
        <Row>
          <Col sm={6} lg={4} className="mb-3">
          <FontAwesomeIcon icon={faCoffee} className='display-5 mb-1' />
            <h6>Ex cupidatat eu</h6>
            <p className="text-muted">Ex cupidatat eu officia consequat incididunt labore occaecat ut veniam labore et cillum id et.</p>
          </Col>
          <Col sm={6} lg={4} className="mb-3">
          <FontAwesomeIcon icon={faGlobe} className='display-5 mb-1' />
            <h6>Tempor aute occaecat</h6>
            <p className="text-muted">Tempor aute occaecat pariatur esse aute amet.</p>
          </Col>
          <Col sm={6} lg={4} className="mb-3">
          <FontAwesomeIcon icon={faGlassCheers} className='display-5 mb-1' />
            <h6>Voluptate ex irure</h6>
            <p className="text-muted">Voluptate ex irure ipsum ipsum ullamco ipsum reprehenderit non ut mollit commodo.</p>
          </Col>
          <Col sm={6} lg={4} className="mb-3">
          <FontAwesomeIcon icon={faCab} className='display-5 mb-1' />
            <h6>Tempor commodo</h6>
            <p className="text-muted">Tempor commodo nostrud ex Lorem occaecat duis occaecat minim.</p>
          </Col>
          <Col sm={6} lg={4} className="mb-3">
          <FontAwesomeIcon icon={faSatellite} className='display-5 mb-1' />
            <h6>Et fugiat sint occaecat</h6>
            <p className="text-muted">Et fugiat sint occaecat voluptate incididunt anim nostrud ea cillum cillum consequat.</p>
          </Col>
          <Col sm={6} lg={4} className="mb-3">
          <FontAwesomeIcon icon={faRobot} className='display-5 mb-1' />
            <h6>Et labore tempor et</h6>
            <p className="text-muted">Et labore tempor et adipisicing dolor.</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Services;
