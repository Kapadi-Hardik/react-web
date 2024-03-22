import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import { IndividualIntervalsExample } from './IndividualIntervalsExample.js';
import  Headers  from './Header.js';
import { Container, Row ,Col } from 'react-bootstrap';
import Product from './Product.js';
import Services from './Services.js';
import Footer from './Footer.js';
import Data from './Data.js';

function App() {
  return (
    <div className="App">
      <Headers />
      <IndividualIntervalsExample />
      <Container>
        <h1 className='m-5'>Trending Products</h1>
        <Row className='mb-4'>
          { Data.slice(0, 4).map((v,i) => {
            return (
            <Col lg="3" md="6" xs="12">
              <Product items={v} index={i}  />
            </Col>
          )})}
        </Row>
        <Services />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
