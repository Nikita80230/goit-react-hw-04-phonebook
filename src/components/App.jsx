import { useEffect, useState } from 'react';
import { Phonebook } from './Phonebook/Phonebook';
import { ContactsList } from './ContactsList/ContactsList';
import { getContactsFromLocalStorage } from 'utils/getContactsFromLocalStorage';

export const App = () => {
  const [contacts, setContacts] = useState(() => getContactsFromLocalStorage());
  const [searchTerm, setSearchTerm] = useState('');

  const addNewContact = data => {
    if (contacts.some(contact => contact.name === data.name)) {
      alert(`${data.name} is already in contacts`);
    } else {
      setContacts(contacts => [...contacts, data]);
    }
  };

  const searchNameInPhonebook = nameToFind => {
    setSearchTerm(nameToFind);
  };

  const removeContact = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  useEffect(
    () => localStorage.setItem('contacts', JSON.stringify(contacts)),
    [contacts]
  );

  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Phonebook addNewContact={addNewContact} />
      <ContactsList
        searchNameInPhonebook={searchNameInPhonebook}
        contactsArray={contacts}
        filteredContacts={filteredContacts}
        removeContact={removeContact}
      />
    </div>
  );
};
