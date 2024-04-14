import { useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';
import css from './SearchBox.module.css';

const SearchBox = () => {
  const dispatch = useDispatch();

  const handleFilter = e => {
    const filterValue = e.target.value;
    dispatch(changeFilter(filterValue));
  };

  return (
    <div className={css.searchBox}>
      <h4>Find contact by name</h4>
      <input
        className={css.searchInput}
        type="text"
        placeholder="Enter name..."
        onChange={handleFilter}
      />
    </div>
  );
};

export default SearchBox;
