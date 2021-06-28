import React, { useState, useEffect } from "react";
import classes from "../Layout/HeaderCartButton.module.css";
import Modal02 from "./Modal02";
import cls from "./Input-css.module.css";

const tokens = [
  { origin: "total", diff: 23234, price: 245435234 },
  { origin: "swap", diff: 1111, price: 123434 },
  { origin: "farm", diff: 3333, price: 234234234 },
];

const CoinSwap = (props) => {
  const [showStatements, setShowStatements] = useState(false);

  const onClick = () => setShowStatements(!showStatements);

  const [totalValue, setTotalValue] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [showTotal, setShowTotal] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  let arrow = "🡡 ";
  let counter = "";
  if (tokens[activeIndex].diff > 5000) {
    arrow = "🡡 ";
    counter = true;
  } else {
    arrow = "🡣 ";
    counter = false;
  }

 // let countersValue = (totalValue / 50000000 - 1) * 100;

  const toggle = () => {
    setIsActive(!isActive);
  };

  const toggle2 = () => {
    setShowTotal(!showTotal);
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
                  {tokens.map((el, index) => {
                    return (
                      <div
                        style={{
                          color: index === activeIndex ? "blue" : "lightgray",
                          marginLeft: 18,
                          textDecoration: index === activeIndex ? "underline" : "none",
                        }}
                        onClick={() => setActiveIndex(index)}
                      >
                        {el.origin}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className={cls.content}>
              <div
                style={{
                  color: counter ? "green" : "red",
                }}
                className={cls.percentage}
              >
                {arrow}
                {tokens[activeIndex].diff}
                {/* {countersValue.toFixed(2)}% */}
              </div>
              <div className={cls.percentage}>{""}</div>
            </div>

            <div className={cls.content}>
              <div className={cls.totalVolume}>
                {/* $ {totalValue.toLocaleString()} */}${" "}
                {tokens[activeIndex].price}
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
