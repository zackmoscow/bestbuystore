import React, { createContext, useReducer, useContext } from "react";

const StoreContext = createContext();
const { Provider } = StoreContext;

const reducer = (state, action) => {
    switch (action.type) {
    case "SET_CURRENT_PRODUCT":
      return {
        ...state,
        currentProduct: action.product,
        loading: false
      };
  
    case "UPDATE_PRODUCTS":
      return {
        ...state,
        products: [...action.products],
        loading: false
      };
  
    case "ADD_PRODUCT":
      return {
        ...state,
        products: [action.product, ...state.products],
        loading: false
      };
  
    case "REMOVE_PRODUCT":
      return {
        ...state,
        prodcuts: state.products.filter((product) => {
          return product._id !== action._id; 
        })
      };
  
    case "ADD_TO_CART":
      return {
        ...state,
        inCart: [action.post, ...state.inCart],
        loading: false
      };
  
    case "UPDATE_CART":
      return {
        ...state,
        inCart: [...state.inCart],
        loading: false
      };
  
    case "REMOVE_FROM_CART":
      return {
        ...state,
        inCart: state.inCart.filter((product) => {
          return product._id !== action._id; 
        })
      };
  
    case "LOADING":
      return {
        ...state,
        loading: true
      };
  
    default:
      return state;
    }
  };

  const StoreProvider = ({ value = [], ...props }) => {
    const [state, dispatch] = useReducer(reducer, {
      products: [],
      currentProduct: {
        _id: 0,
        title: "",
        seller: "",
        description: "",
        short_description: "",
        thumbnail_url: "",
        flash_day: ""
      },
      inCart: [],
      loading: false
    });
  
    return <Provider value={[state, dispatch]} {...props} />;
  };

  const useStoreContext = () => {
    return useContext(StoreContext);
  };
  
  export { StoreProvider, useStoreContext };