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
          <input
            class="form-control"
            type="number"
            v-model.number="dimensiones.col"
          />
          <label class="from-label">Número de decisiones</label>
          <input
            class="form-control"
            type="number"
            v-model.number="dimensiones.filas"
          />
          <div v-if="method == 3 || method == 1">
            <p>Politica arbitraria</p>
            <div
              v-for="(n, index) in dimensiones.col"
              v-bind:item="n"
              v-bind:index="index"
              v-bind:key="n.id"
            >
              <div class="input-group row">
                <input
                  class="form-control col"
                  type="number"
                  v-model.number="dimensiones.arbitraria[n-1]"
                />
              </div>
            </div>
          </div>
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
// import {quicksort} from './quicksort'

export default {
  data() {
    return {
      dimensiones: {
        filas: null,
        col: null,
        arbitraria: [],
      },
      estados: null,
      method: null,
    }
  },
  components: {
    Matrices,
  },
  // created() {
  //   console.log(quicksort([1,9,8,7,6,2,3,42,]))
  // }
}
</script>
