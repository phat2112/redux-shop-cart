import React, { useState, useEffect } from "react";
import { Modal } from "antd";
import PropTypes from "prop-types";
import Nokia from "Assets/images/Nokia.jpg";

import "./styles.scss";

const PopupPayment = ({ quantity ,getTotalValue, visible, setVisible }) => {
  const [total, setTotal] = useState(200);
  const handleCancel = e => {
    setVisible(false);
  };
  const handleOk = e => {
    setVisible(true);
  };
  useEffect(() => {
    let newPrice = 200 * quantity;
    setTotal(newPrice);
  });
  return (
    <div>
      <Modal
        className={"popup-payment"}
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <h1>Payment </h1>
        <table>
          <thead>
            <tr>
              <td className="product-column">
                <h3>Product</h3>
              </td>
              <td>
                <h3>Quantity</h3>
              </td>
              <td>
                <h3>Price</h3>
              </td>
              <td>
                <h3>Total</h3>
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div>
                  <img src={Nokia} alt="" />
                </div>
              </td>
              <td>{quantity}</td>
              <td>200$</td>
              <td>{getTotalValue}</td>
            </tr>
          </tbody>
        </table>
        <div className="modal-payment-option">
          <button className='payment-offline'>Pay when recieve product</button>
          <button className='payment-online'>Pay online</button>
        </div>
      </Modal>
    </div>
  );
};

PopupPayment.propTypes = {
  quantity: PropTypes.number,
  visible: PropTypes.bool,
  setVisible: PropTypes.func,
  getTotalValue: PropTypes.number
};


export default PopupPayment;
