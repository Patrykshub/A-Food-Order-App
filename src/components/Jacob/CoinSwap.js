import React, { useState, useEffect } from "react";
import classes from "../Layout/HeaderCartButton.module.css";
import Modal02 from "./Modal02";
import cls from "./Input-css.module.css";

const tokens = [
  { origin: "total", diff: 23234, price: 245435234 },
  { origin: "swap", diff: 23234, price: 245435234 },
  { origin: "farm", diff: 23234, price: 245435234 },
];

const CoinSwap = (props) => {
  const [showStatements, setShowStatements] = useState(false);
  const onClick = () => setShowStatements(!showStatements);

  const [totalValue, setTotalValue] = useState(0);
  const [isActive, setIsActive] = useState(false);

  let arrow = "🡡 ";
  let counter = "";
  if (totalValue > 50000000) {
    arrow = "🡡 ";
    counter = true;
  } else {
    arrow = "🡣 ";
    counter = false;
  }

  let countersValue = (totalValue / 50000000 - 1) * 100;

  const toggle = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    let totalValue = null;
    if (isActive) {
      totalValue = setInterval(() => {
        setTotalValue((totalValue) => Math.floor(Math.random() * 100000000));
      }, 1000);
    } else if (!isActive && totalValue !== 0) {
      clearInterval(totalValue);
    }
    return () => clearInterval(totalValue);
  }, [isActive, totalValue]);

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
              <div className={cls.tvl}>
                TVL
                <div className={cls.valuesOnTheRight}>
                  <div className={cls.items}>Total</div>
                  <div
                    style={{
                      color: isActive ? "blue" : "lightgray",
                      marginLeft: 18,
                      textDecoration: isActive ? "underline" : "none",
                    }}
                    onClick={toggle}
                  >
                    Swap
                  </div>
                  <div className={cls.items}>Farm</div>
                </div>
              </div>
            </div>
            <div className={cls.content}>
              <div
                style={{ color: counter ? "green" : "red" }}
                className={cls.percentage}
              >
                {arrow}
                {countersValue.toFixed(2)}%
              </div>
              <div className={cls.percentage}>
                {''}
              </div>
            </div>

            <div className={cls.content}>
              <div className={cls.totalVolume}>
                $ {totalValue.toLocaleString()}
              </div>
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
