import React, { useContext, useEffect, useState } from 'react';
import './MyOrders.css';
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';
import { assets } from '../../assets/assets';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MyOrder = () => {
  const { url, token } = useContext(StoreContext);
  const [data, setData] = useState([]);

  const fetchOrders = async () => {
    try {
      const response = await axios.post(url + "/api/order/userorders", {}, { headers: { token } });
      setData(response.data.data);
    } catch (error) {
      toast.error('Failed to fetch orders!'); // Show error toast if fetching fails
    }
  };

  const showToast = (message) => {
    toast.success(message);
  };

  useEffect(() => {
    if (token) {
      fetchOrders();
    }
  }, [token]);

  return (
    <div className='my-orders'>
      <h2>My Orders</h2>
      <div className="container">
        {data.map((order, index) => {
          return (
            <div className="my-orders-order" key={index}>
              <img src={assets.parcel_icon} alt="" />
              <p>
                {order.items.map((item, index) => {
                  if (index === order.items.length - 1) {
                    return item.name + " x " + item.quantity;
                  } else {
                    return item.name + " x " + item.quantity + ",";
                  }
                })}
              </p>
              <p>₹ {order.amount}.00 /-</p>
              <p>Items: {order.items.length} </p>
              <p><span>&#x25cf;</span><b>{order.status}</b></p>
              <button
                onClick={() => {
                  fetchOrders(); 
                  showToast('Order status updated'); 
                }}
              >
                Update status
              </button>
            </div>
          );
        })}
      </div>
      <ToastContainer />
    </div>
  );
}

export default MyOrder;
