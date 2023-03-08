import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNewContact } from 'redux/operations';
import css from './ContactForm.module.css';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);
  const [state, setState] = useState({ name: '', number: '' });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState(prevState => ({ ...prevState, [name]: value }));
  };

  const { name, number } = state;

  const handleSubmit = e => {
    e.preventDefault();
    const normalizedName = name.toLowerCase();
    const dublicate = contacts.find(
      contact => contact.name.toLowerCase() === normalizedName
    );
    if (dublicate) {
      alert(`${name} is already in your contact list`);
      setState({ name: '', number: '' });
      return;
    }
    dispatch(addNewContact(state));
    setState({ name: '', number: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className={css.name}>
        Name
        <input
          value={name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
        />
      </label>
      <br />
      <label className={css.number}>
        Number
        <input
          value={number}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
};
