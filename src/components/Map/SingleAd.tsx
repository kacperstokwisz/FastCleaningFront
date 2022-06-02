import React from "react";

interface Props {}

export const SingleAd = (props: Props) => {
  return (
    <>
      <h2>Name</h2>
      <p>Description</p>
      <p>
        <b>Price zł</b>
      </p>
      <hr />
      <a href="https://google.pl" target="_blank" rel="noreferrer">
        Otwórz ogłoszenie
      </a>
    </>
  );
};
