export function getContactsFromLocalStorage() {
  const stringifyContacts = localStorage.getItem('contacts');
  const parsedContacts = JSON.parse(stringifyContacts) ?? [];

  return parsedContacts;
}
