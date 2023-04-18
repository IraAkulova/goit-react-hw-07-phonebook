import { ContactForm } from './form/ContactForm';
import { Filter } from './filter/Filter';
import { ContactList } from './list/ContactList';

import css from '../components/App.module.css';

export const App = () => {
    return (
      <div className={css.container}>
        <h1>Phonebook</h1>
        <ContactForm/>
        <h2>Contacts</h2>
        <Filter />
        <ContactList/>
      </div>
    );
  }
