const state = {
  carts: []
};
const mutations = {
  addCarts(state, newCart) {
    const isInCart =
      state.carts.findIndex(t => t.id === newCart.id) === -1 ? false : true;
    if (isInCart) {
      state.carts.find(t => t.id === newCart.id).count++;
    } else {
      state.carts.push({ ...newCart, count: 1 });
    }
  },
  subCarts(state, id) {
    if (state.carts.find(t => t.id === id).count > 1) {
      state.carts.find(t => t.id === id).count 
        ? state.carts.find(t => t.id === id).count--
        : (state.carts.find(t => t.id === id).count = 0);
    } else {
      console.log(1);
      state.carts.splice(state.carts.findIndex(t => t.id === id), 1);
    }
    console.log(state.carts);
  },
  clearCarts(state) {
      state.carts.splice(0,state.carts.length)
  }
};

const getters = {
  showGoodsNum(state) {
    return function( id) {
      const isInCart =
        state.carts.findIndex(t => t.id === id) === -1 ? false : true;
      if (isInCart) {
        return state.carts.find(t => t.id === id).count;
      }
    };
  },
  totalObj(state) {
    return state.carts.reduce((obj,t) => ({
      allCount : obj.allCount + t.count,
          allPrice:obj.allPrice+t.price*t.count

    }), {
        allCount: 0,
        allPrice:0
    })
    
  }
};

const carts = {
  state,
  mutations,
  getters
};
export default carts;
