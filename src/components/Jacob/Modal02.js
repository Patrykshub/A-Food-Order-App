import { Fragment } from "react";
import ReactDOM from "react-dom";
import classes from "./CoinSwap.module.css";

const Backdrop02 = (props) => {
  return <div className={classes.backdrop02} onClick={props.onClick}/>;
};

const ModalOverlay02 = (props) => {
  return (
    <div className={classes.modal02}>
      <div className={classes.css}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal02 = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop02 onClick={props.onClick} />, portalElement)}
      {ReactDOM.createPortal(<ModalOverlay02>{props.children}</ModalOverlay02>, portalElement)}
    </Fragment>
  );
};
export default Modal02;