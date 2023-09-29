import { useContext, useState } from "react";
import {Button} from 'react-bootstrap';
import propTypes from "prop-types";


import { CartContext } from "../context/CartContext";

const ItemCount = () => {

  const {cartItems, setCartItems} = useContext(CartContext);
  const [count, setCount] = useState(0);

  const handleAdd = () => {
    setCount(count + 1);
    setCartItems(cartItems + 1)
  };

  const handleRemove = () => {
    if (count <= 0) return;
    setCount(count - 1);
    setCartItems(cartItems - 1)
  };

  return (
    <>
      <Button variant="outline-dark" onClick={handleRemove}> - </Button>
      {` `}
      {count}
      {` `}
      <Button variant="outline-dark" onClick={handleAdd}> + </Button>
    </>
  );
}

ItemCount.propTypes = {
  stock: propTypes.number,
  initial: propTypes.number,
  onAdd: propTypes.func
}

export default ItemCount;
