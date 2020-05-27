import React, { useState } from 'react'
import css from './TvSeriesSearch.module.css';

export interface TvSeriesSearchProps {
  search: (text: string) => void;
}

export const TvSeriesSearch:React.FC<TvSeriesSearchProps> = (props) => {
  const { search } = props;
  const [text, setText] = useState<string>('')

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value)
  }
  
  const searchHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    search(text);
  }

  return <div className={css.search}>
    <form onSubmit={searchHandler}>
      <input
        type="text"
        placeholder="Search"
        value={text}
        onChange={onChangeHandler}
        className={css.inputfield}
      />
    </form>
  </div>
}