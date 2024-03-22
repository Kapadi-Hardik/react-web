import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Product({items}) {

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={items.thumbnail} style={{ height:'200px' }} />
      <Card.Body>
        <Card.Title>{items.title}</Card.Title>
        <Card.Text>
        {items.description}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default Product;