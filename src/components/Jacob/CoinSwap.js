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
            <div className={cls.topdiv}>
              <div className={cls.tvl}></div>
                TVL
                <div className={cls.valuesOnTheRight}>
                  <button className={cls.topdiv}>Total</button>
                  <button className={cls.topdiv}>Swap</button>
                  <button className={cls.topdiv}>Farm</button>
                
              </div>
            </div>

            <div className={cls.percentage}>↓ 23.30%</div>
            <div className={cls.content}>
              <div className={cls.totalVolume}>$8,468,456,123</div>
                <button className={classes.closingButton} onClick={onClick}>
                  Close
                </button>
            </div>
          </div>
        </Modal02>
      )}
    </div>
  );
};

export default CoinSwap;
