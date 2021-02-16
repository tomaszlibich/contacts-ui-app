import * as eventTypes from "./event-types";

const { EVENT } = eventTypes;

function getContactsEvent(contacts) {
  return {
    type: EVENT.CONTACTS_UPDATE,
    contacts,
  };
}

export function editContact(contact, contacts, dispatch) {
  const contactsWithoutEdited = contacts.filter(item => item.id !== contact.id);

  dispatch(getContactsEvent([...contactsWithoutEdited, contact]));
}
