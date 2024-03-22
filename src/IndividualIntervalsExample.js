import Carousel from 'react-bootstrap/Carousel';

export function IndividualIntervalsExample() {
  return (
    <Carousel>
     
      <Carousel.Item interval={1000}>
      <img
          className="d-block w-100"
          src="https://img.freepik.com/premium-vector/banner-template-sales-background-has-abstract-ornament-perfect-your-business-promotion_758894-285.jpg"
          alt="First slide"
          style={{ height: '500px', objectFit: 'cover' }}
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-100"
          src="https://img.freepik.com/premium-vector/abstract-modern-blue-technology-banner-design-web-template-set-horizontal-header-web-banner-vector-abstract-graphic-design-banner-pattern-background-template_181182-14905.jpg"
          alt="First slide"
          style={{ height: '500px', objectFit: 'cover' }}
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}