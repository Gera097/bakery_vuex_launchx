import { createStore } from 'vuex'

export default createStore({
  state: {
    cantidadSabores: {
      fresa: 10,
      chocolate: 10,
      vainilla: 10,
      limon: 10,
      naranja: 10,
    },
    saborElegido: {
      sabores: []
    },
    adornoElegido: {
      adornos: []
    }
  },
  getters: {
  },
  mutations: {
    sabores_elegidos(state, sabores) {
      state.saborElegido.sabores = sabores;
    },
    adornos_elegidos(state, adornos){
      state.adornoElegido.adornos = adornos;
    }
  },
  actions: {
  },
  modules: {
  }
})
