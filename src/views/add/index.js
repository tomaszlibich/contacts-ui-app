import AddView from "./view";
import React from "react";
import { useStateValue } from "../../providers/state";

export const Add = () => {
  const [{ contacts }] = useStateValue();

  return (
    <AddView
      contacts={contacts}
    />
  );
};
