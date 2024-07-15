import axios from "axios";
import { useEffect, useState } from "react";

export default function useFetchData(url) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://3.65.32.166/api/v2/storefront/products/${url}`)
      .then(({ data }) => {
        setData(data.data);
        setLoading(false);
      });
  }, []);
  return {
    data,
    loading,
  };
}
