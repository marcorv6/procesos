<template>
  <form>
    <div>
      <div class="row justify-content-center">
        <div class="col-12 text-left">
          <label class="from-label">Método</label>
          <b-select v-model="method">
            <option value="1">Enumeración exahustiva</option>
            <option value="2">Programación Lineal</option>
            <option value="3">MDP</option>
            <option value="4">MDPD</option>
            <option value="5">Aproximaciones sucesivas</option>
          </b-select>
          <label class="from-label">Número de estados</label>
          <input class="form-control" v-model.number="dimensiones.col" />
          <label class="from-label">Número de decisiones</label>
          <input class="form-control" v-model.number="dimensiones.filas" />
        </div>
      </div>
      <br />

      <div class="text-center py-2">
        <Matrices :method="method" v-bind:dimension="dimensiones"></Matrices>
      </div>

      <br />
    </div>
  </form>
</template>

<script>
import Matrices from './matrices.vue'

export default {
  data() {
    return {
      dimensiones: {
        filas: '',
        col: '',
      },
      method: null
    }
  },
  components: {
    Matrices,
  },
}
</script>
