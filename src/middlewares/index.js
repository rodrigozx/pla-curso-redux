/* eslint-disable no-unused-vars */
export const logger = (store) => (next) => (action) => {
  //   console.log("logger");
  //   console.log("store", store);
  //   console.log("next", next);
  //   console.log("action", action);
  next(action);
};

export const featuring = (store) => (next) => (actionInfo) => {
  const featuredPokemons = [
    { name: "KevinBacon" },
    { name: "Drake" },
    ...actionInfo.action.payload,
  ];

  // agrega pokemones al principio de la lista
  const updatedAction = {
    ...actionInfo,
    action: { ...actionInfo.action, payload: featuredPokemons },
  };

  next(updatedAction);
};
