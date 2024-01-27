import React, { useEffect } from "react";
import "./App.css";
import "./responsive.css";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/productScreen";
import CategoriesScreen from "./screens/CategoriesScreen";
import OrderScreen from "./screens/OrderScreen";
import OrderDetailScreen from "./screens/OrderDetailScreen";
import AddProduct from "./screens/AddProduct";
import Login from "./screens/LoginScreen";
import UsersScreen from "./screens/UsersScreen";
import ProductEditScreen from "./screens/ProductEditScreen";
import NotFound from "./screens/NotFound";
import PrivateRoute from "./PrivateRouter";
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from "./Redux/Actions/ProductActions";
import { listOrders } from "./Redux/Actions/OrderAction";

function App() {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin )
  const {userInfo} = userLogin

  useEffect(() => {
    if(userInfo && userInfo.isAdmin){
      dispatch(listProducts());
      dispatch(listOrders());
    }
  }, [dispatch, userInfo]);

  return (
    <>
      <Router>
        <Switch>
          <PrivateRoute path="/dashboard" component={HomeScreen} exact />
          <PrivateRoute path="/products" component={ProductScreen} />
          <PrivateRoute path="/category" component={CategoriesScreen} />
          <PrivateRoute path="/orders" component={OrderScreen} />
          <PrivateRoute path="/order/:id" component={OrderDetailScreen} />
          <PrivateRoute path="/addproduct" component={AddProduct} />
          <PrivateRoute path="/users" component={UsersScreen} />
          <PrivateRoute path="/product/:id/edit" component={ProductEditScreen} />
          <Route path="/login" component={Login} />
          <PrivateRoute path="*" component={NotFound} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
