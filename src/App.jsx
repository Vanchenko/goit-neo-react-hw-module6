import { useState, useEffect } from 'react'
import './App.css'
import ContactForm from './components/ContactForm/ContactForm'
import SearchBox from './components/SearchBox/SearchBox'
import ContactList from './components/ContactList/ContactList'

const StartData = [
  {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
  {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
  {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
  {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
]

function App() {
  const [filter, setFilter] = useState('');
  const [contactList, setuserList] = useState(()=>{
    const savedContacts = window.localStorage.getItem("saved-contacts");
		if (savedContacts !== null) {
			try {
				const parsedContacts = JSON.parse(savedContacts);
				if (typeof parsedContacts === "object" && parsedContacts !== null) {
					return parsedContacts;
				} else { return StartData }
			} catch (error) {
				console.error("Error parsing saved contacts from localStorage:", error);
				return StartData;
			}
		}
		return StartData;
  });

  const updateContacts = (contact) => {
		setuserList((prevState) => ([
		  ...prevState, contact
  ]));
	};

   const removeContact = contactId => {
    setuserList(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
  };
  useEffect(() => {
		window.localStorage.setItem("saved-contacts", JSON.stringify(contactList));
	}, [contactList]);

  const changeFilter = event => {
    setFilter(event.target.value.trim());
  };

  // Отримання відфільтрованих контактів.
  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contactList.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

   const visibleContacts = getVisibleContacts();

  return (
    <>
      <div>
      <h1 className="title">Phonebook</h1>
        <ContactForm  updateContacts={updateContacts} />
        { contactList.length > 0 ? (
        <>
        <SearchBox value={filter} onChangeFilter={changeFilter} />
        <ContactList contacts={visibleContacts} removeContact={removeContact} />
        </>
        ) : (
          <p>
            Your phonebook is empty. Add first contact!
          </p>
        )}
      </div>
    </>
  )
}

export default App
