import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { addFilter } from '../../redux/filterSlice';

export const Filter = () => {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();
    const filterChange = e => {
      dispatch(addFilter(e.currentTarget.value));
    };

  return (
    <label>
      Find contacts by name
      <br></br>
      <input type="text" value={filter} onChange={filterChange}></input>
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
