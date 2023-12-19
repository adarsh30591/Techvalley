// productReducer.js
const initialState = {
  products: [],
};

export const addToCart = (product) => ({
  type: "ADD_TO_CART",
  payload: product,
});

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    default:
      return state;
  }
};

export default productReducer;
