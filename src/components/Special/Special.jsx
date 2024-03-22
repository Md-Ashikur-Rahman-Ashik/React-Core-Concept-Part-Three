import { useContext } from "react";
import { AssetContext } from "../GrandFather/GrandFather";

const Special = () => {

    // console.log(asset);
    const gift = useContext(AssetContext);

    return (
        <div>
            <h2>Special</h2>
            <p>Has: {gift}</p>
        </div>
    );
};

export default Special;