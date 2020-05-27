import React from 'react';
import css from './TvSeriesResults.module.css';
import { Series } from '../model/series';

export interface TvSeriesResultsProps {
  data: Series[],
  movieClick: (series: Series) => void;
}

export const TvSeriesResults: React.FC<TvSeriesResultsProps> = (props) => {
  const { data, movieClick } = props;
  return <div className={css.moviescontainer}>
    <div className={css.grid}>
      {data.map((series: Series) => {
        const { show: { id, image, name, rating } } = series;
        return <div key={id} className={css.gridItem}>
          <div className={css.movie} onClick={() => movieClick(series)}>
            {image ? <img src={image.medium} alt="" /> : <div className={css.noImage} />}
            <div className={css.movieText}>{name}</div>
            <div className={css.movieText}>{rating.average}</div>
          </div>
        </div>
      })
      }
    </div>
  </div>
}