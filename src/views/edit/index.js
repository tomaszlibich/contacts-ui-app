import EditView from "./view";
import React from "react";
import { withRouter } from "react-router";

export const EditWithRouter = (props) => {
  const { match } = props;

  return (
    <EditView
      id={match.params.id}
    />
  );
};

export const Edit = withRouter(EditWithRouter);