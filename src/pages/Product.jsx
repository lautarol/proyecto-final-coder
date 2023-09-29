import { useParams } from "react-router-dom";
import { useItemCollection } from "../hooks/useItemCollection";

import { ItemDetail, Loader } from "../components";

const Product = () => {
  const { itemId } = useParams();

  const {data, loading} = useItemCollection('productos', itemId);

  return (
    loading ? <Loader /> : <ItemDetail item={data} withDetails />
  )
}

export default Product;
