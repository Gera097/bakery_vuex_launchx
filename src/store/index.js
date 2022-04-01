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
      sabores: ['chocolate']
    },
    adornoElegido: {
      adornos: ['fresas']
    },
    infoCliente: {
      nombre:'',
      tel: '',
      email: ''
    },
    infoPedido: [
      {
        
      }
    ]
  },
  getters: {
    sabores_pastel(state){
      return state.saborElegido.sabores.toString().replaceAll(',', ', ');
    },
    adornos_pastel(state){
      return state.adornoElegido.adornos.toString().replaceAll(',', ', ');
    }
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
    },
    eliminar_pedido(state, index){
      state.infoPedido.splice(index, 1)
    },
    limpiar_formulario(state){
      state.saborElegido.sabores = [];
      state.adornoElegido.adornos = [];
      for (let dato in state.infoCliente) {
        state.infoCliente[dato] = '';
      }
    }

  },
  
  actions: {
  },
  modules: {
  }
})
