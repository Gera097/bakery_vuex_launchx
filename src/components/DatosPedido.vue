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
            <CombinarSabores/>
            <CombinarAdornos/>
            <p>Descripción general del pastel</p>
            <p>Sabores elegidos: {{$store.state.saborElegido.sabores}}</p>
            <p>Adornos elegidos: {{$store.state.adornoElegido.adornos}}</p>
            <button id="realizar-pedido">Realizar Pedido</button>
            </form>
        </div>
</template>

<script>

    import CombinarSabores from "../components/CombinarSabores.vue";
    import CombinarAdornos from '@/components/CombinarAdornos.vue';

    let idEntrada = 1;

    export default {
        name: 'DatosPedido',
        components: {
            CombinarSabores,
            CombinarAdornos
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
                    sabores: this.$store.getters.sabores_pastel,
                    adornos: this.$store.getters.adornos_pastel
                }
                this.$store.commit('agregar_pedido', datos_pedido);

                const info_cantidad_sabores = {
                    lista_elementos: this.$store.state.saborElegido.sabores,
                    grupo: 'cantidadSabores'
                }
                const info_cantidad_adornos = {
                    lista_elementos: this.$store.state.adornoElegido.adornos,
                    grupo: 'cantidadAdornos'
                }

                this.$store.commit('restar_cantidad',info_cantidad_sabores);
                this.$store.commit('restar_cantidad',info_cantidad_adornos);

               /*  this.$store.commit('restar_cantidad',this.$store.state.saborElegido.sabores); */

                alert("Pedido realizado correctamente"); 
                this.$store.commit('limpiar_formulario')
            }
         }
    }
</script>

<style>
</style>