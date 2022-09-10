import axios from 'axios';
import React, {useState} from 'react'
export const BASE_API_URL = 'https://restaurantkg.herokuapp.com/';

export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS';
export const SET_MODAL_STATE = 'SET_MODAL_STATE';
export const SET_PRODUCT = 'SET_PRODUCT';


export const getProducts = () => ({

  type: FETCH_PRODUCTS
})


export const setProducts = (data) => ({
  type: RECEIVE_PRODUCTS,
  payload: data
})


export const setModalState = (state) => ({
  type: SET_MODAL_STATE,
  isOpen: state
})
export const setModalStateAuth = (state) => ({
  type: SET_MODAL_STATE,
  isOpen: state
})







export const fetchProducts = () => {
  return async (dispatch) => {
    dispatch(getProducts());
    try {
      const response = await axios.get(`${BASE_API_URL}/products`);
      dispatch(setProducts(response.data))
    } catch (error) {
      console.error(error);
    }
  }
}

export const createLogin = (payload) => {
    
  return async (dispatch) => {

 
    
    try {
      const response = await axios.post(`${BASE_API_URL}auth/registration/`, payload);
      if (response.status === 400) {
        console.log(response)
      } 
    // if (response.data.errors) {
    //     setError(response.data.errors)
    //     setLoading(false)
    //     return
    //   } 
    } 
    catch (error) {
      console.error('ERROR FROM API', error);
    }
  }
}
export const authLogin = (payload) => {
    
  return async (dispatch) => {

    try {
      const response = await axios.post(`${BASE_API_URL}auth/login/`, payload);
      if (response.status === 400) {
        console.log(response)
      } 
    // if (response.data.errors) {
    //     setError(response.data.errors)
    //     setLoading(false)
    //     return
    //   } 
    } 
    catch (error) {
      console.error('ERROR FROM API', error);
    }
  }
}




