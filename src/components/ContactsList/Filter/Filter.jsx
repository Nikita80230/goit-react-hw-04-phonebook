import css from './Filter.module.css';
import React, { useState } from 'react';

export const Filter = ({ searchNameInPhonebook }) => {
    const [contactsFromPhonebook, setContactsFromPhonebook] = useState('');

    const handleChange = event => {
        setContactsFromPhonebook(event.currentTarget.value);

        searchNameInPhonebook(event.currentTarget.value);
    };

    return (
        <>
            <div className={css.contactWrapper}>
                <span>Find contacts by name</span>
                <input
                    name="inputName"
                    onChange={handleChange}
                    type="text"
                    value={contactsFromPhonebook}
                />
            </div>
        </>
    );
};
