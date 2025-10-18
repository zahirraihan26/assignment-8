import axios from "axios";
import { useEffect, useState } from "react";

const useHooksData = () => {
  const [appsCard, setAppsCard] = useState([]);
  const [loadingCard, setLoadingCard] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoadingCard(true);
    axios('/Data.json')
      .then(res => setAppsCard(res.data))
      .catch(err => setError(err))
      .finally(() => setLoadingCard(false));
  }, []);

  return { appsCard, loadingCard, error };
};

export default useHooksData;
