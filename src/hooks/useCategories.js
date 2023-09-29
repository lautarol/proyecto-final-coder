import { useCollection } from "./useCollection";


export const useCategories = () => {
  const { data, loading, error } = useCollection("productos");


  return { categories: [...new Set(data.map((producto)=> producto.category))], loading, error };
};
