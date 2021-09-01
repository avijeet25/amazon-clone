export const initialState = {
  basket: [],
  user: null,
};

// the main purpose of a selector is to just call it and get some particular prop as backet total or price
//USING SELECTOR WE COULD GET THE PRICE TOTAL OF THE BASKET ITEMS
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

//there is an initial state and then we manupilate that initial state using actions
const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      //logic for acting itme to basket
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
      break;
    case "REMOVE_FROM_BASKET":
      //Logic for Removing item from basket

      //here we cloned the basket
      let newBasket = [...state.basket];

      //here we check to see if product exist
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      if (index >= 0) {
        //items exists in basket, remove it
        //cut it out
        newBasket.splice(index, 1);
      } else {
        //if not show item is now there
        console.warn(
          `Can't remove the product (id: ${action.id} as its not in basket )`
        );
      }
      return { ...state, basket: newBasket };

    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};

export default reducer;

// eslint-disable-next-line
