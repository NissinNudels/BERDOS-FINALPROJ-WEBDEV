import axios from "axios";
import { 
        PRODUCT_CREATE_REVIEW_FAIL,
        PRODUCT_CREATE_REVIEW_REQUEST,
        PRODUCT_CREATE_REVIEW_SUCCESS,
        PRODUCT_DETAILS_FAIL, 
        PRODUCT_DETAILS_REQUEST, 
        PRODUCT_DETAILS_SUCCESS, 
        PRODUCT_LIST_FAIL, 
        PRODUCT_LIST_REQUEST, 
        PRODUCT_LIST_SUCCESS } from "../Constants/ProductConstants";
import { logout } from "./UserAction";

//FOR LIST OF PRODUCT
export const listProduct = (keyword = " ", pageNumber = " ") => async(dispatch) => {
    try{
        dispatch({ type: PRODUCT_LIST_REQUEST });
        const { data } = await axios.get(`/api/products?keyword=${keyword}&pageNumber=${pageNumber}`);
        dispatch({ type:PRODUCT_LIST_SUCCESS, payload: data });

    }catch (error){
        dispatch({
            type:PRODUCT_LIST_FAIL,
            payload:
            error.response && error.response.data.message 
            ? error.response.data.message 
            : error.message, 
        });
    }
};

//FOR EVERY INDIVIDUAL PRODUCT
export const detailProduct = (id) => async(dispatch) => {
    try{
        dispatch({ type: PRODUCT_DETAILS_REQUEST });
        const { data } = await axios.get(`/api/products/${id}`);
        dispatch({ type:PRODUCT_DETAILS_SUCCESS, payload: data });

    }catch (error){
        dispatch({
            type:PRODUCT_DETAILS_FAIL,
            payload:
            error.response && error.response.data.message 
            ? error.response.data.message 
            : error.message, 
        });
    }
};

// PRODUCT REVIEW CREATE
export const createProductReview =
  (productID, review) => async (dispatch, getState) => {
    try {
      dispatch({ type: PRODUCT_CREATE_REVIEW_REQUEST });

      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      await axios.post(`/api/products/${productID}/review`, review, config);
      dispatch({ type: PRODUCT_CREATE_REVIEW_SUCCESS });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      if (message === "No token not Authorized") {
        dispatch(logout());
      }
      dispatch({
        type: PRODUCT_CREATE_REVIEW_FAIL,
        payload: message,
      });
    }
  };