import { createContext } from "react";
import Aunty from "../Aunty/Aunty";
import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";
import "./GrandFather.css";

const AssetContext = createContext("Gold");

const GrandFather = () => {
  const asset = "Diamond";

  return (
    <div className="grandFather">
      <h2>Grand Father</h2>
      <AssetContext.Provider value="Gold">
        <section className="flex">
          <Father asset={asset}></Father>
          <Uncle asset={asset}></Uncle>
          <Aunty></Aunty>
        </section>
      </AssetContext.Provider>
    </div>
  );
};

export default GrandFather;
