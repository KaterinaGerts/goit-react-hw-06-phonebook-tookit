// import useLocalStorage from 'hooks/useLocalStorage';
import Container from 'components/Container';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';

function App() {
  return (
    <Container>
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    </Container>
  );
}

export default App;
