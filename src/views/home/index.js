import HomeView from "./view";
import React from "react";
import { useStateValue } from "../../providers/state";

export const Home = () => {
  const [{ contacts }] = useStateValue();

  return (
    <HomeView
      contacts={contacts}
    />
  );
};
