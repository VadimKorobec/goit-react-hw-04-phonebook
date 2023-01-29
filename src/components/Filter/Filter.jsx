import PropTypes from 'prop-types';
import { Input, Label } from './Filter.styled';

export const Filter = ({ filter, onChange }) => {
  return (
    <Label>
      Find contacts by name
      <Input type="text" name="filter" value={filter} onChange={onChange} />
    </Label>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
