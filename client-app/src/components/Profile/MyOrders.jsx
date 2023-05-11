import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import jwt_decode from "jwt-decode";
import { getOrderDetails } from "../../actions/orderActions";

const MyOrders = () => {
  const dispatch = useDispatch();

  const orderDetails = useSelector((state) => state.orderDetails);
  const { order } = orderDetails;
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  // check if user is logged in and get the user details based on that user id
  useEffect(() => {
    if (userInfo) {
      dispatch(getOrderDetails(jwt_decode(userInfo.access).user_id));
    }
  }, []);

  return (
    <div className='myorders-component'>
      <table>
        <thead>
          <tr>
            <th className='table-data-header'>ID</th>
            <th className='table-data-header'>Statusi</th>
            <th className='table-data-header'>Adresa</th>
            <th className='table-data-header'>Pagesa</th>
            <th className='table-data-header'>Totali</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(order) && order.length > 0
            ? order.map((orderData, i) => {
                return (
                  <tr key={i}>
                    <td className='table-data'>{orderData.order_id}</td>
                    <td className='table-data'>{orderData.order_status}</td>
                    <td className='table-data'>{orderData.address}</td>
                    <td className='table-data'>{orderData.payment_type}</td>
                    <td className='table-data'>
                      {orderData?.products.reduce((total, product) => {
                        return total + product.price * product.quantity;
                      }, 0)}
                    </td>
                  </tr>
                );
              })
            : null}
        </tbody>
      </table>
    </div>
  );
};

export default MyOrders;
