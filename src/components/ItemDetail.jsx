import { useNavigate } from "react-router-dom";
import propTypes from 'prop-types';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ItemCount from "./ItemCount";



const ItemDetail = ({item, withDetails= false}) => {

  const cardStyle = { width: '18rem', textAlign:'center'}
  const imgStyle = { height: '18rem' }
  const textStyle = !withDetails ? { maxWidth: '18rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' } : {}
  const navigate = useNavigate();
  return (
    <Card style={cardStyle}>
      <Card.Img variant="top" src={item.thumbnail} style={imgStyle}/>
      <Card.Body>
        <Card.Title style={textStyle}>{item.title}</Card.Title>
        {withDetails && <Card.Text>{item.description}</Card.Text>}
        {!withDetails && <Button variant="primary" onClick={() => navigate(`/product/${item.id}`)}>Detalle del producto</Button>}
      </Card.Body>
      <Card.Body>
        <ItemCount item={item}/>
      </Card.Body>
    </Card>
  )
}

ItemDetail.propTypes = {
  item: propTypes.object,
  withDetails: propTypes.bool
}

export default ItemDetail
