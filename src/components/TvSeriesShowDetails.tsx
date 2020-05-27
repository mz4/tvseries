import { Show } from '../model/series';
import React from 'react';
import css from './TvSeriesShowDetails.module.css';

interface TvSeriesShowDetailsProps {
  show: Show | null;
  onClose: () => void;
}

export const TvSeriesShowDetails: React.FC<TvSeriesShowDetailsProps> = (props) => {
  const { show, onClose } = props;
  return show && (
    <div className={css.wrapper}>
      <div className={css.content}>

        <span
          className={css.closeButton}
          onClick={onClose}
        >x</span>

        <img className={css.image} src={show?.image.original} alt=""/>

        {
          show?.genres.map(g =>
              <span className={css.tag} key={g}>{g}</span>
            )
        }

        <div className={css.metadata}>
          <h1>{show?.name}</h1>

          <div className={css.summary} dangerouslySetInnerHTML={{__html: show?.summary}} />
          <a className={css.button} href={show?.url} target="_blank" rel="noopener noreferrer"></a>

        </div>

      </div>
    </div>
  )
}