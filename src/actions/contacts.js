import * as eventTypes from "./event-types";

const { EVENT } = eventTypes;

function getContactsEvent(contacts) {
  return {
    type: EVENT.CONTACTS_UPDATE,
    contacts,
  };
}

export function setContacts(contacts, dispatch) {
  dispatch(getContactsEvent(contacts));
}
