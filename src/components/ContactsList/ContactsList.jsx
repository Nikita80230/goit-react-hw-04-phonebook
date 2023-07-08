import { Component } from 'react';
import { Filter } from 'components/ContactsList/Filter/Filter';
import { Contact } from 'components/Contact/Contact';

export class ContactsList extends Component {
    render() {
        return (
            <>
                <h2>Contacts</h2>
                <Filter searchNameInPhonebook={this.props.searchNameInPhonebook} />
                <ul>
                    {this.props.filteredContacts.map(({ name, number, id }) => {
                        return (
                            <Contact
                                removeContact={this.props.removeContact}
                                name={name}
                                number={number}
                                key={id}
                                id={id}
                            />
                        );
                    })}
                </ul>
            </>
        );
    }
}
