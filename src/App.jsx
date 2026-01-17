import { useSelector } from 'react-redux';
import ContactForm from './components/ContactForm/ContactForm'
import SearchBox from './components/SearchBox/SearchBox'
import ContactList from './components/ContactList/ContactList'
import { getContacts } from './redux/selectors';
import './App.css'

function App() {
  const contacts = useSelector(getContacts);
  return (
    <>
      <div>
      <h1 className="title">Phonebook</h1>
        <ContactForm  />
        { contacts.length > 0 ? (
        <>
          <SearchBox />
          <ContactList />
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
