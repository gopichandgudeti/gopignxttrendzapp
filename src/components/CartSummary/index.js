// Write your code here
import CartContext from '../../context/CartContext'

import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let totalCost = 0
      const cartItemsCount = cartList.length
      cartList.forEach(eachCartItem => {
        totalCost += eachCartItem.price * eachCartItem.quantity
      })

      return (
        <div className="order-total-container">
          <h1 className="order-total">
            Order Total: <span className="total-cost">Rs {totalCost}/-</span>
          </h1>
          <p className="items-count-text">{cartItemsCount} items in cart</p>
          <button type="button" className="checkout-btn">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
