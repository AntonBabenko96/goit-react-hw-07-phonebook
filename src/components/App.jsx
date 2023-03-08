import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { Box } from './Box/Box';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { useDispatch, useSelector } from 'react-redux';
import { Loader } from './Loader/Loader';

import css from '../components/App.module.css';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.contacts.isLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.wrapper}>
      {isLoading && <Loader />}
      <Box title="Phonebook">
        <ContactForm />
      </Box>
      <Box title="Contacts">
        <Filter />
        <ContactList className={css.contacts} />
      </Box>
    </div>
  );
};
