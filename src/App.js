import Header from "../src/components/Header";
import Home from "../src/components/Home";
import Checkout from "../src/components/Checkout";
import Login from "../src/components/Login";
import Orders from "../src/components/Orders";
import Payment from "../src/components/Payment";
import CompareProducts from "../src/components/CompareProducts";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { auth } from "../src/components/firebase";
import { useStateValue } from "../src/components/StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

//public key
const promise = loadStripe(
  "pk_test_51LQIV7JmV3eGDMI7kcmDvVOYf4KYkBuYQTB9JmZGDs6NN01wIjO3iUPg4LyLtIIXktjCQyFfmiPydnYz7JONM4eS00c19FpH8e"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("USER is", authUser);

      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, [dispatch]);

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={[<Header />, <Home />]} />
          <Route path="/checkout" element={[<Header />, <Checkout />]} />
          <Route
            path="/payment"
            element={[
              <Header />,
              <Elements stripe={promise}>
                <Payment />
              </Elements>,
            ]}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/orders" element={[<Header />, <Orders />]} />
          <Route path="/compare" element={[<Header />, <CompareProducts />]} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
