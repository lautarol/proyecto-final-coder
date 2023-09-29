import { useEffect, useState } from "react";
import db from "../utils/firebaseConfig";
import { getDocs, collection } from "firebase/firestore";

export const useCollection = (collectionName) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {

    const dataCollection = collection(db, collectionName);

    getDocs(dataCollection)
      .then((snapshot) => {
        setData(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return { data, loading, error };
};
