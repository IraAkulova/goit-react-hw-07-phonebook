import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/operations';
import { getContacts, getFilter } from 'redux/selectors';

export const ContactList = ({contact}) => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  const getVisibleContacts = () => {
      const normalizedFilter = filter.toLocaleLowerCase();
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter)
      );
    };
  const visibleContacts = getVisibleContacts();

  const handleDelete = id => dispatch(deleteContact(id));

  return (
    <ul>
      {visibleContacts.map(contact => (
        <li key={contact.id}>
          {contact.name}: {contact.phone}
          <button
            type="button"
            onClick={() => {
              handleDelete(contact.id);
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  value: PropTypes.array,
  onDeleteContact: PropTypes.func,
};
