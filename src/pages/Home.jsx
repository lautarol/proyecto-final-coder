import { useCollection } from "../hooks/useCollection"

import {Loader, ItemListContainer} from "../components";

const Home = () => {
    const {data, loading} = useCollection("productos")

    return loading ? <Loader /> : <ItemListContainer products={data} />;

}

export default Home;
