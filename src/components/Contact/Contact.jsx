// import { nanoid } from "nanoid"
import css from './Contact.module.css';

export const Contact = ({ name, number, removeContact, id }) => {
    return (
        <li className={css.contactItem}>
            <span>
                {name}: {number}
            </span>
            <button onClick={() => removeContact(id)} className={css.deleteButton}>
                Delete
            </button>
        </li>
    );
};
