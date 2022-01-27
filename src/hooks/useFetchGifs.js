import { useState, useEffect } from "react";
import { getGift } from "../helpers/getGifs";

export const useFetchGifs = (categoria) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getGift(categoria).then((imgs) => {
      setState({
        data: imgs,
        loading: false,
      });
    });
  }, []);
  return state;
};
