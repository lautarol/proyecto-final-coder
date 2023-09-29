import PropTypes from 'prop-types';
import { Row, Col, Container } from 'react-bootstrap';

import { ItemDetail } from '.';

const ItemListContainer = ({ products }) => {
  return (
    <Container style={ {display: 'flex', width: '100%', justifyContent: 'center'} }>
    <Row>
      {products.map(product => <Col key={product.id} style={{margin: '10px'}}><ItemDetail item={product} /></Col>)}
    </Row>
    </Container>
  );
}

ItemListContainer.propTypes = {
  products: PropTypes.array.isRequired
}

export default ItemListContainer;
