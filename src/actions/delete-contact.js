import * as eventTypes from "./event-types";

const { EVENT } = eventTypes;

function getContactsEvent(contacts) {
  return {
    type: EVENT.CONTACTS_UPDATE,
    contacts,
  };
}

export function deleteContacts(contactsToBeDeleted, contacts, dispatch) {
  const contactsWithoutDeleted = contacts.filter(contact => !contactsToBeDeleted.includes(contact.id));

  dispatch(getContactsEvent(contactsWithoutDeleted));
}
