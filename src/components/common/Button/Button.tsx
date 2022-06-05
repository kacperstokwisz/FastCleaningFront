import React from "react";
import { Link } from "react-router-dom";
import "./Button.scss";

interface Props {
  text: string;
  to?: string;
}

const Button = (props: Props) =>
  props.to ? (
    <Link to={props.to}>
      <button>{props.text}</button>
    </Link>
  ) : (
    <button>{props.text}</button>
  );

export { Button };
