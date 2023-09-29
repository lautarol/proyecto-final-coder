import {useState, useEffect} from "react";
import { getDoc, doc } from "firebase/firestore";
import db from "../utils/firebaseConfig";

export const useItemCollection = (collectionName, itemId) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const item = doc(db, collectionName, itemId);

    getDoc(item)
      .then((snapshot) => {
        setData({ id: snapshot.id, ...snapshot.data() });
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [itemId]);

  return { data, loading };
};
