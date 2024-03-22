import { useContext } from "react";
import { MoneyContext } from "../GrandFather/GrandFather";

const Brother = () => {
  const [money, setMoney] = useContext(MoneyContext);

  return (
    <div>
      <h2>Brother</h2>
      <p>Money: {money}</p>
    </div>
  );
};

export default Brother;
