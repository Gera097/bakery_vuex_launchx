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
    },
    infoCliente: {
      nombre:'',
      tel: '',
      email: ''
    },
    infoPedido: [
    ]
  },
  getters: {
  },
  mutations: {
    sabores_elegidos(state, sabores) {
      state.saborElegido.sabores = sabores;
    },
    adornos_elegidos(state, adornos){
      state.adornoElegido.adornos = adornos;
    },
    cambiar_nombreCliente(state, nombre){
      state.infoCliente.nombre = nombre;
    },
    cambiar_telCliente(state, tel){
      state.infoCliente.tel = tel;
    },
    cambiar_emailCliente(state, email){
      state.infoCliente.email = email;
    },

    agregar_pedido(state, info_pedido){
      state.infoPedido.push(info_pedido)
    }

  },
  
  actions: {
  },
  modules: {
  }
})
