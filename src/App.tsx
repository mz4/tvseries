import React, { useEffect } from 'react';
import { TvSeriesResults } from './components/TvSeriesResults';
import { TvSeriesSearch } from './components/TvSeriesSearch';
import { TvSeriesShowDetails } from './components/TvSeriesShowDetails';
import { useTv } from './hooks/useTv';
import css from './App.module.css'

export const App = () => {
  const { data, details, searchHandler, movieClickHandler, closeModal } = useTv();

  useEffect(() => {
    searchHandler('a');
  }, [])

  return (
    <div className={css.container}>
      <TvSeriesSearch 
        search={searchHandler}
      />

      <TvSeriesResults 
        data = {data}
        movieClick = {movieClickHandler}
      />

      <TvSeriesShowDetails 
        show={details}
        onClose={closeModal}
      />

    </div>
  )
}

export default App;