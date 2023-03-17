import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filter/filter-slice';
import { getFilter } from 'redux/filter/filter-selectors';
import InputField from 'shared/components/InputField/InputField';
import { Box } from '@mui/system';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const handleChange = ({ target }) => dispatch(setFilter(target.value));

  return (
    <Box sx={{ maxWidth: '320px', width: '100%', margin: '0 auto' }}>
      <label htmlFor="filter">
        <InputField
          placeholder="Find contacts by name"
          label="Find contacts by name"
          value={filter}
          type="text"
          name="filter"
          onChange={handleChange}
        />
      </label>
    </Box>
  );
};

export default Filter;
