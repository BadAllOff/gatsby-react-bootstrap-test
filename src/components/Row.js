import React from "react";

const Row = (props) => {
  const { label, delimeter=true, children } = props;

  return (
    <>
      <p className="card-text text-primary">{label}</p>
      <p className="pull-right text-right">{children}</p>
      {delimeter && <hr />}
    </>
  );
};

export default Row;
