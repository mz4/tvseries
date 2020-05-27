import { useState } from 'react';
import { Series, Show } from '../model/series';
import Axios from 'axios';

export function useTv() {
  const [details, setDetails] = useState<Show | null>(null)
  const [data, setData] = useState<Series[]>([])

  const searchHandler = (text: string) => {
    Axios.get<Series[]>(`http://api.tvmaze.com/search/shows?q=${text}`)
      .then(res => setData(res.data))
  }

  const movieClickHandler = (series: Series) => {
    setDetails(series.show);
  }

  const closeModal = () => {
    setDetails(null)
  }

  return {
    data,
    details,
    searchHandler,
    movieClickHandler,
    closeModal
  }
}