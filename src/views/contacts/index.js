import React, { useState } from "react";

import ContactsView from "./view";
import { deleteContacts } from '../../actions/delete-contact';
import { useStateValue } from "../../providers/state";

export const Contacts = () => {
  const [{ contacts }, dispatch] = useStateValue();
  const [markedForDeletion, setMarkedForDeletion] = useState([]);

  const onDeleteMarked = () => {
    deleteContacts(markedForDeletion, contacts, dispatch);
    setMarkedForDeletion([]);
  };

  const onDeleteClick = (id) => {
    let newArray;

    if (markedForDeletion.includes(id)) {
      newArray = markedForDeletion.filter(item => item !== id);
    } else {
      newArray = [...markedForDeletion, id];
    }

    setMarkedForDeletion(newArray);
  };


  return (
    <ContactsView
        contacts={contacts}
        onDeleteClick={onDeleteClick}
        onDeleteMarked={onDeleteMarked}
        markedForDeletion={markedForDeletion}
    />
  );
};