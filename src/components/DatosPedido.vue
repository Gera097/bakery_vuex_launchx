<template>
        <div>
            <form v-on:submit.prevent="agregarEntrada">
            <h2>Mi Pedido</h2>
            <h3>Mis Datos: </h3>
            <label>Nombre: <input type="text" v-model="cambiar_nombre_cliente" required></label>
            <br>
            <label>Teléfono: <input type="tel" v-model="cambiar_tel_cliente" required></label>
            <br>
            <label>Correo Electrónico :<input type="email" v-model="cambiar_email_cliente" required></label>
            <br>
            <h3>Mi pastel: </h3>

            <ElegirIngredienteVue
            grupo='Pasteles'
            caption='Elegir Pastel'
            tipo='radio'/>

            <CombinarSabores/>
            <CombinarAdornos/>
            <p>Descripción general del pastel</p>
            <p>Pastel elegido: {{$store.state.ElementoElegido.Pasteles}}</p>
            <p>Sabores elegidos: {{$store.state.saborElegido.sabores}}</p>
            <p>Adornos elegidos: {{$store.state.adornoElegido.adornos}}</p>
            <p>Precio: ${{$store.getters.calcular_precio}}</p>
            <button id="realizar-pedido">Realizar Pedido</button>
            </form>
        </div>
</template>

<script>

    import ElegirIngredienteVue from "./ElegirIngrediente.vue";
    import CombinarSabores from "../components/CombinarSabores.vue";
    import CombinarAdornos from '@/components/CombinarAdornos.vue';

    let idEntrada = 1;

    export default {
        name: 'DatosPedido',
        components: {
            CombinarSabores,
            CombinarAdornos,
            ElegirIngredienteVue
        },
        computed: {
            cambiar_nombre_cliente: {
                get(){
                    return this.$store.state.infoCliente.nombre;
                },
                set(nombre) {
                    this.$store.commit('cambiar_nombreCliente', nombre)
                }
            },
            cambiar_tel_cliente: {
                get(){
                    return this.$store.state.infoCliente.tel;
                },
                set(tel) {
                    this.$store.commit('cambiar_telCliente', tel)
                }
            },
            cambiar_email_cliente: {
                get(){
                    return this.$store.state.infoCliente.email;
                },
                set(email) {
                    this.$store.commit('cambiar_emailCliente', email)
                }
            },
            agregarEntrada() {
                const datos_pedido = {
                    id: idEntrada++,
                    nombre: this.$store.state.infoCliente.nombre,
                    tel: this.$store.state.infoCliente.tel,
                    email: this.$store.state.infoCliente.email,
                    pastel: this.$store.state.ElementoElegido.Pasteles,
                    sabores: this.$store.getters.sabores_pastel,
                    adornos: this.$store.getters.adornos_pastel,
                    precio: this.$store.getters.calcular_precio
                }
                this.$store.commit('agregar_pedido', datos_pedido);

                const info_cantidad_sabores = {
                    lista_elementos: this.$store.state.saborElegido.sabores,
                    grupo: 'Sabores',
                    propiedad: 'cantidad'
                }

                const info_cantidad_adornos = {
                    lista_elementos: this.$store.state.adornoElegido.adornos,
                    grupo: 'Adornos',
                    propiedad: 'cantidad'
                }

                const info_cantidad_pasteles = {
                    lista_elementos: this.$store.getters.list_pastel,
                    grupo: 'Pasteles',
                    propiedad: 'cantidad'
                }

                this.$store.commit('restar_cantidad',info_cantidad_pasteles);
                this.$store.commit('restar_cantidad',info_cantidad_sabores);
                this.$store.commit('restar_cantidad',info_cantidad_adornos);

                alert("Pedido realizado correctamente"); 
                this.$store.commit('limpiar_formulario')
            }
         }
    }
</script>

<style scoped>
    form {
        max-width: 725px;
        margin: 2em auto;
        padding-bottom: 5%;
        border-style: dotted;
    }
</style>