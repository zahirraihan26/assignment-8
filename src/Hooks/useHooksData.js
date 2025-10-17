import axios from "axios";
import { useEffect, useState } from "react";

const useHooksData = () => {
  const [apps, setApps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios('/Data.json')
      .then(res => setApps(res.data))
      .catch(err => setError(err))
      .finally(() => setLoading(false));
  }, []);

  return { apps, loading, error };
};

export default useHooksData;
