import { Component } from 'react';
import { Phonebook } from './Phonebook/Phonebook';
import { ContactsList } from './ContactsList/ContactsList';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    searchTerm: '',
  };

  addNewContact = data => {

    if (this.state.contacts.some(contact => contact.name === data.name)) {
      alert(`${data.name} is already in contacts`);
    } else {
      this.setState(prevState => ({
        contacts: [...prevState.contacts, data],
      }));
    }
  };

  searchNameInPhonebook = nameToFind => {
    this.setState({
      searchTerm: nameToFind,
    });
  };

  removeContact = id => {
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== id),
    });
  };

  componentDidMount() {
    const stringifyContacts = localStorage.getItem("contacts");
    const parsedContacts = JSON.parse(stringifyContacts) ?? [];
    console.log("console in didMount")

    this.setState({
      contacts: parsedContacts,
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts.length !== this.state.contacts.length) {
      const stringifyState = JSON.stringify(this.state.contacts);
      localStorage.setItem("contacts", stringifyState)
    }
  }

  render() {
    const filteredContacts = this.state.contacts.filter(({ name }) =>
      name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    );

    return (
      <div>
        <Phonebook addNewContact={this.addNewContact} />
        <ContactsList
          searchNameInPhonebook={this.searchNameInPhonebook}
          contactsArray={this.state.contacts}
          filteredContacts={filteredContacts}
          removeContact={this.removeContact}
        />
      </div>
    );
  }
}
