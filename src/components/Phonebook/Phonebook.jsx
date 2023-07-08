import { Component } from 'react';

import css from './Phonebook.module.css';
import { nanoid } from 'nanoid';

export class Phonebook extends Component {
  state = {
    name: '',
    number: '',
    id: '',
  };

  onHandleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addNewContact({
      name: this.state.name,
      number: this.state.number,
      id: nanoid(),
    });
    this.setState({
      name: '',
      number: '',
      id: '',
    });
  };
  render() {
    console.log("console in render")
    return (
      <div className={css.inputGroup}>
        <h2>Name</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="">
            Name
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.onHandleChange}
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
              value={this.state.number}
              onChange={this.onHandleChange}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
      </div>
    );
  }
}
