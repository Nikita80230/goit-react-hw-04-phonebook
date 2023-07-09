import { useState } from 'react';

import css from './Phonebook.module.css';
import { nanoid } from 'nanoid';

export const Phonebook = ({ addNewContact }) => {
  const [contactData, setContactData] = useState({
    name: '',
    number: '',
    id: '',
  });

  const onHandleChange = event => {
    setContactData(contactData => ({
      ...contactData,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    addNewContact({
      name: contactData.name,
      number: contactData.number,
      id: nanoid(),
    });
    setContactData({
      name: '',
      number: '',
      id: '',
    });
  };

  return (
    <div className={css.inputGroup}>
      <h2>Name</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">
          Name
          <input
            type="text"
            name="name"
            value={contactData.name}
            onChange={onHandleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label htmlFor="">
          Tel
          <input
            type="tel"
            name="number"
            value={contactData.number}
            onChange={onHandleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    </div>
  );
};
