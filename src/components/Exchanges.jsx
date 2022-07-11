import React from "react";
import { useGetExchangesQuery } from "../services/cryptoApi";

const Exchanges = () => {
  const { data } = useGetExchangesQuery();
  console.log(data);
  return <div>Exchanges</div>;
};

export default Exchanges;
