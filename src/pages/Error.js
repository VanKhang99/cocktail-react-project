import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="section-error">
      <h1 className="section-error__title">Oops! It's A Dead End</h1>
      <Link to="/" className="button button--primary">
        Back home
      </Link>
    </section>
  );
};

export default Error;
