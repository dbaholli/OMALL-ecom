import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import jwt_decode from "jwt-decode";
import {
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineProfile,
} from "react-icons/ai";
import { saveShippingAddress } from "../../actions/cartActions";
import { createOrder } from "../../actions/orderActions";
import { ORDER_CREATE_RESET } from "../../constants/orderConstants";
import { getUserDetails } from "../../actions/userAction";
import "./styles/_shipping-component.scss";
import { cityNamesAl, cityNamesKs, cityNamesMk } from "../data";

const ShippingComponent = () => {
  // get the cart state from the redux store and destructure the shippingAddress and cartItems state
  const cart = useSelector((state) => state.cart);
  const { shippingAddress, cartItems } = cart;

  const [name, setName] = useState(shippingAddress.name);
  const [lastName, setLastName] = useState(shippingAddress.lastName);
  const [address, setAddress] = useState(shippingAddress.address);
  const [phone, setPhone] = useState(shippingAddress.phone);
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
  const [email, setEmail] = useState(shippingAddress.email);
  const [cityDropdown, setCityDropdown] = useState(
    shippingAddress.cityDropdown
  );
  const [stateDropdown, setStateDropdown] = useState(
    shippingAddress.stateDropdown
  );
  const [message, setMessage] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [discountCoupon, setDiscountCoupon] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [hasAcceptedTerms, sethasAcceptedTerms] = useState(false);
  const [cityNames] = useState({
    ks: cityNamesKs,
    al: cityNamesAl,
    mk: cityNamesMk,
  });

  const [cities, setCities] = useState(
    cityNames[stateDropdown]?.map((city) => ({
      label: city,
      value: city,
    })) || []
  );

  const [states] = useState([
    {
      label: "Kosova",
      value: "ks",
    },
    {
      label: "Shqiperia",
      value: "al",
    },
    {
      label: "Maqedonia",
      value: "mk",
    },
  ]);

  let navigate = useNavigate();
  const dispatch = useDispatch();

  // get user state from redux store
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userDetails = useSelector((state) => state.userDetails);
  const { user } = userDetails;

  // get the orderData state from redux store and the response object returned from the request
  const orderData = useSelector((state) => state.order);
  const { order, error, success } = orderData;

  useEffect(() => {
    if (!userInfo) {
      console.log("You need to login");
    } else {
      if (!user || !user.first_name) {
        dispatch(getUserDetails(jwt_decode(userInfo.access).user_id));
      } else {
        setName(user?.first_name);
        setLastName(user?.last_name);
        setAddress(user?.address);
        setPhone(user?.phone_number);
        setPostalCode(user?.postal_code);
        setEmail(user?.email);
        setCityDropdown(user?.city);
        setStateDropdown(user?.state);
      }
    }
  }, [dispatch, userInfo, user]);

  // this function saves the order details which customer needs
  // to fill for delivery purpose and future use
  const handleOrderDetails = (e) => {
    e.preventDefault();
    // validate the fields and display toast failed message if the required inputs are empty
    if (
      !name ||
      !lastName ||
      !address ||
      !phone ||
      !cityDropdown ||
      !postalCode ||
      !stateDropdown
    ) {
      toast.error("Ju lutem plotsoni fushat e nevojshme per dergesen!");
      // if the fields are filled dispatch the saveShippingAddress action and display success toast message
    } else {
      dispatch(
        saveShippingAddress({
          name,
          lastName,
          address,
          email,
          cityDropdown,
          postalCode,
          stateDropdown,
          phone,
        })
      );
      toast.success("Te dhenat e dorezimit u ruan me sukses!");
    }
  };

  // resets the cart and ordered items to empty values
  useEffect(() => {
    // this conditional validates the order function response
    // if the order has been sent successfully it displays the toast success message
    if (success) {
      toast.success("Porosia juaj eshte derguar!");
      // this dispatcher calls the reset order type which clears the state of the order
      dispatch({ type: ORDER_CREATE_RESET });
      // this conditional shows a toast failed message if the order has failed
    } else {
      error ? toast.error("Porosia e produktit deshtoi!") : null;
    }
  }, [success, error]);

  // this function sends the request to the order endpoint
  // and sends the cartItem and shippingAddress object as data
  const handleOrder = () => {
    // Validate form fields
    if (
      !name ||
      !lastName ||
      !address ||
      !phone ||
      !cityDropdown ||
      !postalCode ||
      !stateDropdown
    ) {
      toast.error("Ju lutem plotsoni fushat e nevojshme per dergesen!");
      return;
    }

    // Validate payment and terms
    if (isChecked === false || !hasAcceptedTerms) {
      toast.error(
        "Duhet te zgjedhni nje menyre te pageses dhe te pranoni kushtet!"
      );
      return;
    }

    // this forEach takes the cart object data from localstorage/redux
    // and sets the custom neccessary values needed to make the order request
    const itemsToBePurchased = [];
    cart.cartItems.forEach((cartItem) => {
      itemsToBePurchased.push({
        id: cartItem.id,
        color: cartItem.color,
        name: cartItem.name,
        shipping: cartItem.shipping,
        price: cartItem.price + cartItem.shipping,
        product: cartItem.product,
        quantity: Number(cartItem.qty),
      });
    });
    // dispatch the createOrder action which sends the order data to the api
    if (cartItems.length === 0) {
      toast.error("Nuk keni produkte ne shporte!");
      return;
    } else {
      dispatch(
        createOrder({
          user_id: userInfo ? jwt_decode(userInfo.access).user_id : null,
          products: itemsToBePurchased,
          order_status: "pending",
          address: cart.shippingAddress.address || address,
          city: cart.shippingAddress.cityDropdown || cityDropdown,
          email: cart.shippingAddress.email || email,
          first_name: cart.shippingAddress.name || name,
          last_name: cart.shippingAddress.lastName || lastName,
          phone: cart.shippingAddress.phone || phone,
          state: cart.shippingAddress.stateDropdown || stateDropdown,
          postal_code: cart.shippingAddress.postalCode || postalCode,
          payment_type: paymentMethod,
          selected_coupon: discountCoupon ? discountCoupon : null,
          additional_info: message,
        })
      );
    }
  };

  // handles state change of the checkbox and displays the chosen payment method
  const handleChange = (event) => {
    setPaymentMethod(event.target.value);
    setIsChecked(true);
  };

  const handleCheckboxChange = (event) => {
    sethasAcceptedTerms(event.target.checked);
  };

  const handleStateChange = (e) => {
    const selectedState = e.target.value;
    setStateDropdown(selectedState);

    const selectedCities = cityNames[selectedState]?.map((city) => ({
      label: city,
      value: city,
    }));
    setCities(selectedCities);
  };

  return (
    <div className='component-layout shipping-component'>
      <div className='shipping-left'>
        <h1 className='header-text shipping-header'>Faturim & Dërgim</h1>
        <form className='order-details-form' onSubmit={handleOrderDetails}>
          <div className='inline-inputs'>
            <div className='orderdetails-input-container'>
              <label htmlFor='name'>
                <p>Emri</p>
              </label>
              <div className='orderdetails-input'>
                <AiOutlineProfile />
                <input
                  id='name'
                  type='text'
                  placeholder='Shkruaj emrin tuaj'
                  value={name ? name : ""}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>
            <div className='orderdetails-input-container'>
              <label htmlFor='lastname'>
                <p>Mbiemri</p>
              </label>
              <div className='orderdetails-input'>
                <AiOutlineProfile />
                <input
                  id='lastname'
                  type='text'
                  placeholder='Shkruaj mbiemrin tuaj'
                  value={lastName ? lastName : ""}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className='order-details-input-container'>
            <label htmlFor='adresa'>
              <p>Adresa</p>
            </label>
            <div className='order-details-input'>
              <AiOutlineProfile />
              <input
                id='adress'
                type='text'
                placeholder='Shkruaj adresen tuaj'
                value={address ? address : ""}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
          </div>
          <div className='order-details-input-container'>
            <label htmlFor='adresa'>
              <p>Email</p>
            </label>
            <div className='order-details-input'>
              <AiOutlineMail />
              <input
                id='adress'
                type='text'
                placeholder='Shkruaj email adresen tuaj'
                value={email ? email : ""}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className='order-details-input-container'>
            <label htmlFor='kodipostal'>
              <p>Kodi Postal</p>
            </label>
            <div className='order-details-input'>
              <AiOutlineMail />
              <input
                id='postal'
                type='text'
                placeholder='Shkruaj kodin postal tuaj'
                value={postalCode ? postalCode : ""}
                onChange={(e) => setPostalCode(e.target.value)}
              />
            </div>
          </div>
          <div className='order-details-input-container'>
            <label htmlFor='kodipostal'>
              <p>Numri i Telefonit</p>
            </label>
            <div className='order-details-input'>
              <AiOutlinePhone />
              <input
                id='phone'
                type='phone'
                placeholder='Shkruaj numrin e telefonit tuaj'
                value={phone ? phone : ""}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </div>
          <p>Shteti</p>
          <div className='select-input'>
            <select
              value={stateDropdown ? stateDropdown : "default"}
              onChange={handleStateChange}
            >
              <option value='default' disabled>
                Shteti
              </option>
              {states.map((state) => (
                <option key={state.value} value={state.value}>
                  {state.label}
                </option>
              ))}
            </select>
          </div>

          <p>Qyteti</p>
          <div className='select-input'>
            <select
              value={cityDropdown ? cityDropdown : "default"}
              onChange={(e) => setCityDropdown(e.target.value)}
            >
              <option value={"default"} disabled>
                Qyteti
              </option>
              {cities.map((city) => (
                <option key={city.value} value={city.value}>
                  {city.label}
                </option>
              ))}
            </select>
          </div>
          <div className='order-details-input'>
            <label htmlFor='message'>
              <p>Shënime porosie (opsionale)</p>
            </label>
            <textarea
              id='message'
              type='text'
              placeholder='Shkruani mesazhin tuaj'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>

          <input type='submit' value='Ruaj ndryshimet' />
        </form>
      </div>
      <div className='shipping-right'>
        <h1 className='header-text shipping-header'>Porosia juaj</h1>
        <div className='payment-products-container'>
          {cartItems?.map((item) => (
            <>
              <div key={item.id} className='payment-products-rows'>
                <img
                  src={`${import.meta.env.VITE_APP_API}${item?.image[0]?.value?.image?.original?.src}`}
                  alt='Othman'
                  className='cartproduct-image'
                  height='100px'
                  width='125px'
                />
                <div className='product-final-details'>
                  <p className='product-final-text paragraph-text'>
                    Produkti: {item?.name}
                  </p>
                  <p className='product-final-text paragraph-text'>
                    Sasia: {item?.qty}
                  </p>
                  <p className='product-final-text paragraph-text'>
                    Nentotali: €{item?.price * item?.qty}
                  </p>
                </div>
              </div>
            </>
          ))}
          {cartItems?.slice(0, 1).map((item) => (
            <p className='product-final-text paragraph-text'>
              Transporti: {item?.shipping}€
            </p>
          ))}
          <p className='product-final-text paragraph-text'>
            Totali:&nbsp;
            {cartItems?.reduce((finalPrice, item, idx) => {
              if (idx === 0) finalPrice += Number(item?.shipping);
              finalPrice += item?.price * item?.qty;

              return finalPrice;
            }, 0)}
            €
          </p>
        </div>
        <div className='payment-choices'>
          <p className='paragraph-text'>Menyra e pageses:</p>
          <select value={paymentMethod} onChange={handleChange}>
            <option value=''>Zgjedh menyren e pageses</option>
            <option value='Cash'>Cash</option>
            <option value='Kartele'>Kartele</option>
          </select>
          <input
            type='text'
            placeholder='Kuponi i zbritjes'
            className='styled-input coupon-input'
            value={discountCoupon}
            onChange={(e) => setDiscountCoupon(e.target.value)}
          />
          <div className='paragraph-text'>
            {paymentMethod && (
              <p className='paragraph-text'>
                Paguaj me: <span>{paymentMethod}</span>
              </p>
            )}
          </div>
          <p className='paragraph-text'>
            {paymentMethod === "Kartele" ? (
              <div className='bank-details'>
                <h3 className='HEADER-text'>Paguaj ne TEB banka:</h3>
                <p className='paragraph-text'>Filiala: DARDANIA</p>
                <p className='paragraph-text'>
                  Numri i llogarise: 20-20-000-1879933-50
                </p>
                <p className='paragraph-text'>
                  IBAN/NLLBN: XK052020000187993350
                </p>
                <p className='paragraph-text'>Swift: TEBKXKPR</p>
              </div>
            ) : null}
          </p>

          <div className='terms'>
            <input
              type='checkbox'
              id='remember-checkbox'
              checked={hasAcceptedTerms}
              onChange={handleCheckboxChange}
            />
            <p className='paragraph-text accept-terms'>
              I pranoj <Link to='/termat'>Termet dhe Kushtet</Link>
            </p>
          </div>
          <button className='shared-button pay-btn' onClick={handleOrder}>
            Paguaj
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShippingComponent;
