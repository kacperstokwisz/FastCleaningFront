import React, { useEffect, useState } from "react";
import { apiUrl } from "../../config/api";
import { AdEntity } from "types";

interface Props {
  id: string;
}

export const SingleAd = (props: Props) => {
  const { id } = props;
  const [data, setData] = useState<AdEntity | null>(null);

  useEffect(() => {
    (async () => {
      const res = await fetch(`${apiUrl}/ad/${id}`);
      const data = await res.json();
      setData(data);
    })();
  }, []);

  if (data === null) {
    return <p>Wczytywanie...</p>;
  }
  return (
    <>
      <h2>{data.name}</h2>
      <p>{data.description}</p>
      <p>
        <b>{data.price}zł</b>
      </p>
    </>
  );
};
