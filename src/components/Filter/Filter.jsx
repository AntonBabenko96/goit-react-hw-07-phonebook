import { getFilterContact } from 'redux/slice';
import { useDispatch, useSelector } from 'react-redux';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.contacts.filter);
  const handleFilter = e => {
    const { value } = e.target;
    dispatch(getFilterContact(value));
  };

  return (
    <input
      name="filter"
      onChange={handleFilter}
      placeholder="enter name or number"
      value={filter}
    />
  );
};
