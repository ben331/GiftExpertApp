import { useEffect, useState } from "react";
import getGifs from "../helpers/getGifs";


const useFetchGifs = ( category ) => {

    const [ gifs, setGifs ] = useState([]);
    const [ isLoading, setIsLoading] = useState(true);

    useEffect(()=>{
        getGifs(category)
            .then( (data) => {
                setGifs(data)
                setIsLoading(false)
            });
    }, [ ]);

  return {
    gifs,
    isLoading
  }
}

export default useFetchGifs
