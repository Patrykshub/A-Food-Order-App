import React from "react";
import classes from "../Layout/HeaderCartButton.module.css";
import Modal02 from "./Modal02";
import cls from "./Input-css.module.css";

const CoinSwap = (props) => {
  const [showStatements, setShowStatements] = React.useState(false);
  const onClick = () => setShowStatements(!showStatements);

  return (
    <div onClick={props.onClick}>
      <button className={classes.button} onClick={onClick}>
        {" "}
        Coin Swap
      </button>

      {showStatements && (
        <Modal02 onClick={onClick}>
          <div>
            <div className={cls.tvl}>TVL</div>
            <div className={cls.valuesOnTheRight}>
              <div>TVL</div>
              <div>TVL</div>
              <div>TVL</div>
            </div>

            <div>TVL</div>
            <div>TVL</div>
          </div>
          <button className={classes.closingButton} onClick={onClick}>
            Close
          </button>
        </Modal02>
      )}
    </div>
  );
};

export default CoinSwap;
