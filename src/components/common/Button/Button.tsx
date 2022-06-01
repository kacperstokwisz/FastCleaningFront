import React from "react";
import "./Button.scss";

interface Props {
  text: string;
}

const Button = (props: Props) => {
  const { text } = props;
  return <button>{text}</button>;
};

export { Button };
