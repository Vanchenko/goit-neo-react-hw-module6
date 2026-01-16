import React from 'react';
import css from './SearchBox.module.css';

// Компонент фільтрації контактів
function SearchBox({ value, onChangeFilter }) {
  return (
    <div className={css.search_wrapper}>
      <label >Find contacts by name</label>
        <input
          type="text"
          value={value}
          onChange={onChangeFilter}
        />
    </div>
  );
}

export default SearchBox;