import classes from "./Cart.module.css";

import Modal from '../UI/Modal';

const Cart = (props) => {
  const cartItems = (
    <ul className={classes['cart-items']}>
      {[{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }].map((item) => (
        <li>{item.name}</li>
      ))}{" "}
    </ul>
  );

  return (
    <Modal className={classes.cart}>
      {cartItems}
      <div className={classes.total}>
          <span>Total Amount</span>
          <span>54.60</span>
      </div>
      <div className={classes.actions}>
          <button className={classes['button--alt']}>Close</button>
          <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
