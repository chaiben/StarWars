import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ViewStarship from "../components/ViewStarship";
import { API_URL } from "../variables";
import Loading from "../components/Loading";
import Error from "../components/Error";

export default function Starship(){
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [starship, setStarship] = useState(false);
  
  useEffect(() => {
    setLoading(true);
    axios({
      method: 'GET',
      url: API_URL+id
    }).then(res => {
      setStarship(res.data)
      setLoading(false)
    }).catch(e => {
      setLoading(false)
      setError(e.response.data.detail)
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Fragment>
      {loading && <Loading />}
      {starship && <ViewStarship starship={starship} />}
      {error && <Error message={error} />}
    </Fragment>
  );
}