import contactsReducer from "./contacts";
import sidebarReducer from "./sidebar";

export const rootContextReducer = (
  { contacts, sidebar },
  action
) => {
  return {
    contacts: contactsReducer(contacts, action),
    sidebar: sidebarReducer(sidebar, action)
  };
};
