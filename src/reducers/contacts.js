import * as eventTypes from "../actions/event-types";

import initialState from "../store/initial-state";

const { EVENT } = eventTypes;

export default function contactsReducer(state = initialState.contacts, action) {
  switch (action.type) {
    case EVENT.CONTACTS_UPDATE:
      return action.contacts;
    default:
      return state;
  }
}
