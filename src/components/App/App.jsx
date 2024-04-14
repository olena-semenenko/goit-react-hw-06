import css from './App.module.css';

import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import ContactList from '../ContactList/ContactList';

export const App = () => {
  // rendering component
  return (
    <div className={css.container}>
      <h1>Phonebook</h1>

      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
};

export default App;
