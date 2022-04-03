import { createStore } from 'vuex'

export default createStore({
  state: {
    Sabores: {
      fresa: {precio: 55, cantidad: 10},
      chocolate: {precio: 60, cantidad: 10},
      vainilla: {precio: 50, cantidad: 10},
      limon: {precio: 50, cantidad: 10},
      naranja: {precio: 50, cantidad: 10},
    },
    Adornos: {
      fondant: {precio: 15, cantidad: 20},
      chocolate: {precio: 20, cantidad: 20},
      nueces: {precio: 20, cantidad: 20},
      fresas: {precio: 20, cantidad: 20},
      frutas: {precio: 30, cantidad: 20},
      chantilli: {precio: 30, cantidad: 20},
      
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
    },
    restar_cantidad(state, info_cantidades){
      
      for (let elemento of info_cantidades.lista_elementos) {
        state[info_cantidades.grupo][elemento][info_cantidades.propiedad] -= 1;
      }
      
    }

  },
  
  actions: {
  },
  modules: {
  }
})
