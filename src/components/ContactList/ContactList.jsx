import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import { getContacts, getFilter } from '../../redux/selectors';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const searchFilter = useSelector(getFilter);
  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchFilter.toLowerCase()),
  );
    return (
      <ul className={css.contacts_list}>
        {visibleContacts.map((contact) => (
          <Contact
            key={contact.id}
            id={contact.id}
            name={contact.name}
            number={contact.number}
          />
        ))}
      </ul>
    );
};

export default ContactList;