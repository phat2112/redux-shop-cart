import React, {useState, useEffect} from "react";
import PropTypes from "prop-types";
import Nokia from "Assets/images/Nokia.jpg";
import {Icon} from 'antd'
import "./styles.scss";
import {connect} from 'react-redux'
import {total} from 'Stores/ShopCart/Actions'
import {ShopCartSelector} from 'Stores/ShopCart/Selectors'
import PopupPayment from "Components/atom/PopupPayment";

const ProductDetail = ({totalPayment, getTotalValue}) => {
    const [quantity, setQuantity] = useState(1)
    const [visible, setVisible] = useState(false)
    const handleShowModal = valueVisible => {
        setVisible(valueVisible)
        totalPayment({
          quantity: quantity,
          price: 200,
        })
    }
    useEffect(() => {
        if(quantity <= 1) setQuantity(1)
    }, [quantity])
    useEffect(() => {
      console.log('getTotalValue', getTotalValue)
    }, [getTotalValue])
  return (
    <div>
      <div className="product-detail">
        <div className="product-detail-image">
          <img src={Nokia} alt="" />
        </div>
        <div className="product-detail-info">
          <div className="product-detail-info-content">
            <p>Description:</p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
          </div>
          <div className="product-detail-info-content">
            <p>Detail:</p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
          </div>
          <div className="product-detail-footer">
            <div className="product-detail-footer-quantity">
                <span onClick={() => setQuantity(quantity - 1)}><Icon type="minus" /></span>
                <h4>{quantity}</h4>
                <span onClick={() => setQuantity(quantity + 1)}><Icon type="plus" /></span>
            </div>
            <div className="product-detail-footer-payment">
              <button onClick={() => handleShowModal(true)}> Buy</button>
            </div>
          </div>
        </div>
      </div>
      <PopupPayment visible={visible} quantity={quantity} setVisible={setVisible} getTotalValue={getTotalValue}/>
    </div>
  );
};

ProductDetail.propTypes = {
  totalPayment: PropTypes.func,
  getTotalValue: PropTypes.number,
};
const mapsStateToProps = state => ({
  getTotalValue: ShopCartSelector.getTotalValue(state)
})
const mapsDispatchToProps = dispatch => ({
  totalPayment: totalValue => dispatch(total(totalValue))
})
export default connect(mapsStateToProps, mapsDispatchToProps)(ProductDetail);
