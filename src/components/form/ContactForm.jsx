import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/operations';
import { getContacts } from 'redux/selectors';
import css from '../form/ContactForm.module.css';

export const ContactForm = () => {
  const contacts = useSelector(getContacts);
  let name = useSelector(state => state.contacts.name);
  let number = useSelector(state => state.contacts.number);

  const dispatch = useDispatch();

  const handleInputChange = e => {
    switch (e.target.name) {
      case 'name':
        name = e.target.value;
        break;

      case 'number':
        number = e.target.value;
        break;

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const contExist = contacts.find(
      contact => contact.name.toLowerCase() === e.target.elements.name.value.toLowerCase()
    );
    if (contExist) {
      return alert(`${e.target.elements.name.value} is already in contacts list!`);
    }
    const form = e.target;
    dispatch(addContact({ name: form.elements.name.value, phone: form.elements.number.value }));
    form.reset();
  };


    return (
      <form onSubmit={handleSubmit} className={css.contactForm}>
        <label className={css.field}>
          Name
          <br></br>
          <input
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={handleInputChange}
          />
        </label>
        <label className={css.field}>
          Number
          <br></br>
          <input
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
