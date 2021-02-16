import * as eventTypes from "./event-types";

const { EVENT } = eventTypes;

function getContactsEvent(contacts) {
  return {
    type: EVENT.CONTACTS_UPDATE,
    contacts,
  };
}

export function addContact(contact, contacts, dispatch) {
  dispatch(getContactsEvent([...contacts, contact]));
}

