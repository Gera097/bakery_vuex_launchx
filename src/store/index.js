import { createStore } from 'vuex'

export default createStore({
  state: {
    Pasteles: {
      tres_leches: {precio: 200, cantidad: 15},
      cupcake: {precio: 30, cantidad: 15},
      cheesecake: {precio: 180, cantidad: 15},
      tradicional: {precio: 100, cantidad: 15},
      nata: {precio: 120, cantidad: 15},
    },

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
    ElementoElegido: {
      Pasteles: ['tres_leches']
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
        nombre: 'Gerardo Sánchez Alba',
        tel: '4641881555',
        email: 'g.sanchezalba@outlook.com',
        pastel: 'tres_leches',
        sabores: 'vainilla',
        adornos: 'fresas',
        precio: 270
      }
    ]
  },
  getters: {
    list_pastel(state) {
      if (typeof(state.ElementoElegido.Pasteles) === "string") {
        return [state.ElementoElegido.Pasteles]; 
      }
      else {
        return state.ElementoElegido.Pasteles;
      }
    },
    sabores_pastel(state){
      return state.saborElegido.sabores.toString().replaceAll(',', ', ');
    },
    adornos_pastel(state){
      return state.adornoElegido.adornos.toString().replaceAll(',', ', ');
    },
    calcular_precio(state){
      let precio = 0;
      let nSabores = state.saborElegido.sabores.length;

      for (let elemento of state.saborElegido.sabores){
        precio += state.Sabores[elemento].precio / nSabores
      }  

      for (let elemento of state.adornoElegido.adornos){
        precio += state.Adornos[elemento].precio
      } 

      if (typeof(state.ElementoElegido.Pasteles) === 'string') {
        precio += state.Pasteles[state.ElementoElegido.Pasteles].precio;
      }
      else {
        for (let elemento of state.ElementoElegido.Pasteles){
          precio += state.Pasteles[elemento].precio
        } 
      }
      return precio;
    }
  },
  mutations: {
    pastel_elegido(state, pastel) {
        state.ElementoElegido.Pasteles = pastel;
    },

    /* elementoElegido(state, info_elementos){
      state.ElementoElegido[info_elementos.grupo] = info_elementos.lista
  
    }, */
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
