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
  }, [dispatch]);

  return (
    <div className='myorders-component'>
      <table>
        <thead>
          <tr>
            <th className='table-data-header'>Statusi</th>
            <th className='table-data-header'>Klienti</th>
            <th className='table-data-header'>Adresa</th>
            <th className='table-data-header'>Sasia</th>
            <th className='table-data-header'>Totali</th>
          </tr>
        </thead>
        <tbody>
          {order?.map((orderData, i) => {
            return (
              <>
                <tr key={i}>
                  <td className='table-data'>{orderData.order_status}</td>
                  <td className='table-data'>
                    {orderData.first_name} {orderData.last_name}
                  </td>
                  <td className='table-data'>{orderData.address}</td>
                  {orderData?.products.map((p, i) => {
                    return (
                      <>
                        <td className='table-data'>{p.quantity}</td>
                        <td className='table-data'>
                          {orderData?.products.reduce(
                            (total, product) =>
                              total + product.quantity * product.price,
                            0
                          )}
                          €
                        </td>
                      </>
                    );
                  })}
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default MyOrders;
