import css from './Filter.module.css';
import React, { Component } from 'react';

export class Filter extends Component {
    state = {
        contactsFromPhonebook: '',
    };

    handleChange = event => {
        this.setState({
            contactsFromPhonebook: event.currentTarget.value,
        });

        this.props.searchNameInPhonebook(event.currentTarget.value);
    };

    render() {
        return (
            <>
                <div className={css.contactWrapper}>
                    <span>Find contacts by name</span>
                    <input
                        name="inputName"
                        onChange={this.handleChange}
                        type="text"
                        value={this.state.contactsFromPhonebook}
                    />
                </div>
            </>
        );
    }
}
