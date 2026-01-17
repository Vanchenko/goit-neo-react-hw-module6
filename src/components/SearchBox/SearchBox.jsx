import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from '../../redux/selectors';
import { setFilter } from '../../redux/filtersSlice'
import css from './SearchBox.module.css';

// Компонент фільтрації контактів
function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  const handleChangeFilter = (event) => { 
    dispatch(setFilter(event.target.value))
  }

  return (
    <div className={css.search_wrapper}>
      <label >Find contacts by name</label>
        <input
          type="text"
          value={filter}
          onChange={handleChangeFilter}
        />
    </div>
  );
}

export default SearchBox;