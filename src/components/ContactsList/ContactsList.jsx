// import { Component } from 'react';
import { Filter } from 'components/ContactsList/Filter/Filter';
import { Contact } from 'components/Contact/Contact';

export const ContactsList = ({
    searchNameInPhonebook,
    filteredContacts,
    removeContact,
}) => {
    return (
        <>
            <h2>Contacts</h2>
            <Filter searchNameInPhonebook={searchNameInPhonebook} />
            <ul>
                {filteredContacts.map(({ name, number, id }) => {
                    return (
                        <Contact
                            removeContact={removeContact}
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
};
