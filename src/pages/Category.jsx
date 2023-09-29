import { useParams } from "react-router-dom";
import { useCollection } from "../hooks/useCollection";
import {useState, useEffect} from 'react';
import { ItemListContainer, Loader } from "../components";

const Category = () => {
  const {categoryId} = useParams();
  const { data, loading } = useCollection("productos");
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const productsFiltered = data.filter((product) => product.category === categoryId);
    setProducts(productsFiltered);
  }, [data, categoryId]);

  return loading ? <Loader /> : <ItemListContainer products={products} />;
}

export default Category;
