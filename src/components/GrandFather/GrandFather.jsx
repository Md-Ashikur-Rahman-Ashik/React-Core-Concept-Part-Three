import { createContext, useState } from "react";
import Aunty from "../Aunty/Aunty";
import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";
import "./GrandFather.css";

export const AssetContext = createContext("Gold");
export const MoneyContext = createContext(1000);

const GrandFather = () => {

  const [money, setMoney] = useState(1000);

  const asset = "Diamond";

  return (
    <div className="grandFather">
      <h2>Grand Father</h2>
      <p>Net Money: {money}</p>
      <MoneyContext.Provider value={[money, setMoney]}>
        <AssetContext.Provider value="Gold">
          <section className="flex">
            <Father asset={asset}></Father>
            <Uncle asset={asset}></Uncle>
            <Aunty></Aunty>
          </section>
        </AssetContext.Provider>
      </MoneyContext.Provider>
    </div>
  );
};

export default GrandFather;
